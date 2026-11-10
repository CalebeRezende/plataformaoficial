// Adiciona questões novas ao banco em questoes/<arquivo>.json.
// Uso: node ferramentas/adicionar_questoes.mjs <arquivo-fonte.json> <nome-do-arquivo-no-banco>
// Formato da fonte: [{ "t": "D9", "n": 2, "s": "enunciado", "o": [5 alternativas], "e": "comentário", "l": "base legal" }]
// Convenção: a alternativa CORRETA é sempre a primeira (o[0]); o script embaralha e distribui o gabarito entre A–E.
// Para manter a ordem original (ex.: "I e II", "todas"), informe "k": 1 e a posição correta em "a".
import fs from 'node:fs';
import path from 'node:path';

const [src, nome] = process.argv.slice(2);
if (!src || !nome) { console.error('Uso: node ferramentas/adicionar_questoes.mjs fonte.json nome'); process.exit(1); }
const raiz = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dir = path.join(raiz, 'questoes');
const destino = path.join(dir, nome + '.json');
const banco = fs.existsSync(destino) ? JSON.parse(fs.readFileSync(destino, 'utf8')) : [];
const novas = JSON.parse(fs.readFileSync(src, 'utf8'));
const TOPICOS = /^(P[1-7]|D([1-9]|1[0-9]|2[0-2])|G[1-5])$/;

let seed = banco.length * 7919 + 17;
const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
const prefixo = nome;
const cont = [0, 0, 0, 0, 0];
banco.forEach(q => cont[q.a]++);
let seq = banco.reduce((m, q) => Math.max(m, +q.id.split('-').pop() || 0), 0);
const vistos = new Set(banco.map(q => q.s));

for (const q of novas) {
  if (!TOPICOS.test(q.t)) throw new Error('Tópico inválido: ' + q.t);
  if (!Array.isArray(q.o) || q.o.length !== 5 || new Set(q.o).size !== 5) throw new Error('Alternativas inválidas: ' + q.s.slice(0, 60));
  if (vistos.has(q.s)) { console.warn('Duplicada, ignorada:', q.s.slice(0, 60)); continue; }
  vistos.add(q.s);
  let o = q.o, a = q.a ?? 0;
  if (!q.k) {
    const certa = o[a], erradas = o.filter((_, i) => i !== a);
    for (let i = erradas.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [erradas[i], erradas[j]] = [erradas[j], erradas[i]]; }
    // Escolhe a letra menos usada até agora (empate decidido ao acaso) para equilibrar o gabarito.
    const min = Math.min(...cont), livres = [0, 1, 2, 3, 4].filter(i => cont[i] === min);
    a = livres[Math.floor(rnd() * livres.length)];
    o = [...erradas]; o.splice(a, 0, certa);
  }
  seq++; cont[a]++;
  banco.push({ id: `${prefixo}-${String(seq).padStart(4, '0')}`, t: q.t, n: q.n || 2, s: q.s, o, a, e: q.e || '', l: q.l || '' });
}
if (new Set(banco.map(q => q.id)).size !== banco.length) throw new Error('IDs duplicados no banco ' + nome);
fs.writeFileSync(destino, JSON.stringify(banco));

// Atualiza o índice usado pelo site.
const arquivos = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'index.json').sort();
const indice = arquivos.map(f => ({ arquivo: f, total: JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')).length }));
fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify({ atualizado: new Date().toISOString().slice(0, 10), arquivos: indice }, null, 1));
console.log(`${nome}: ${banco.length} questões · total no banco: ${indice.reduce((s, x) => s + x.total, 0)}`);
