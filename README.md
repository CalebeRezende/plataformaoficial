# Trilha TJ-SP 2027 — Oficial de Justiça

Site estático independente, pronto para **GitHub Pages**, com 3 provas reais (280 questões) em folha de respostas interativa, 70 questões autorais comentadas, com gabaritos de 2024, 2023 e 2009.

## Publicar no GitHub Pages

1. **Descompacte o ZIP**. O GitHub precisa receber **os arquivos dentro da pasta**, não o arquivo `.zip` isolado.
2. No [GitHub](https://github.com/new), crie um repositório, por exemplo `trilha-tjsp`. Use **Public** se estiver no plano gratuito.
3. No repositório, clique em **Add file → Upload files**, selecione todo o conteúdo descompactado (incluindo `index.html` no diretório principal) e faça **Commit changes** na branch `main`. Se o navegador não aceitar upload de pastas, use GitHub Desktop ou envie as pastas separadamente.
4. Vá a **Settings → Pages → Build and deployment → Deploy from a branch**. Selecione **main** e **/(root)**; clique em **Save**.
5. Em **Settings → Pages**, clique em **Visit site** quando estiver publicado. URL normal: `https://SEU-USUARIO.github.io/trilha-tjsp/`.

Guia com mais detalhes: [PUBLICAR_NO_GITHUB.md](PUBLICAR_NO_GITHUB.md).

## O que já vem carregado

- **280 questões de provas reais** (TJ-SP 2024 v1, 2023 v4 e 2009 v1) com gabarito oficial. Os cadernos em PDF **já abrem automaticamente** ao lado da folha de respostas — não é preciso baixar nem carregar nada.
- **Banco de questões no estilo Vunesp** (pasta `questoes/`), com casos práticos, letra da lei, gabarito comentado e base legal. O simulado sorteia 70 questões na distribuição do edital (15 Português, 40 Específicos, 15 Gerais), priorizando as que você ainda não respondeu.
- **29 módulos de estudo**, plano do dia orientado pelos erros, **simulado de 70 questões + 2 discursivas** com cronômetro de 5 h.
- Diagnóstico por disciplina, histórico de simulados e exportação/importação do progresso em JSON.
- Tema claro e escuro, atalhos de teclado (A–E para marcar, ← → para navegar) e layout adaptado ao celular.
- Funciona como **site estático**: sem build, servidor ou banco de dados. Após a primeira visita, a interface e as questões funcionam offline; os PDFs das provas exigem internet.

## Estrutura dos arquivos

- `index.html`: aplicativo completo (interface, provas reais, gabaritos e guia de estudo).
- `questoes/`: banco de questões em JSON, carregado sob demanda; `questoes/index.json` lista os arquivos.
- `ferramentas/adicionar_questoes.mjs`: adiciona novas questões ao banco, embaralhando as alternativas e equilibrando o gabarito.
- `icons/`, `manifest.webmanifest`, `sw.js`: ícone, instalação no celular e uso offline.
- `.nojekyll`: evita o processamento Jekyll no GitHub Pages.

## Como adicionar questões

1. Crie um arquivo JSON com as questões novas. A alternativa **correta deve ser a primeira**:
   `[{"t": "D9", "n": 2, "s": "Enunciado…", "o": ["certa", "errada", "errada", "errada", "errada"], "e": "Comentário", "l": "CPC, art. 252"}]`
   (`t` = código do assunto, como P1–P7, D1–D17 ou G1–G5; `n` = nível, 1 médio e 2 difícil.)
2. Rode `node ferramentas/adicionar_questoes.mjs novas.json processo-civil` (o segundo argumento é o arquivo de destino em `questoes/`).
3. Faça commit da pasta `questoes/`.

## Visualização dos PDFs

- No computador, o caderno abre no leitor de PDF do próprio navegador, com navegação por página (a página escolhida fica salva por prova).
- No celular, onde os navegadores não exibem PDF incorporado, o site usa automaticamente um visualizador alternativo (Google Docs Viewer).
- Se um site de origem bloquear a exibição, use o botão de trocar visualizador ou **Nova aba**.

## Limitações e avisos

- **Direitos de terceiros:** o ZIP **não inclui cópias dos PDFs das provas** nem transcrições integrais. Os cadernos originais são acessados pelos endereços públicos nas provas.
- Uma fonte externa pode sair do ar ou bloquear a exibição incorporada; há botões para trocar o visualizador ou abrir em nova aba.
- Atenção à **versão** de cada caderno ao corrigir. Em 2023, as questões 49 e 67 estão anuladas. Não existe verificação independente de todas as retificações possíveis para 2009.
- Questões de provas antigas podem refletir legislação ou informática desatualizadas. Valide sempre com o Edital TJSP2602 e normas vigentes. As 280 questões reais têm gabarito, porém não apresentam comentários detalhados por questão.
- O GitHub Pages hospeda os arquivos públicos. O progresso **não** é sincronizado entre dispositivos; para transferi-lo, use **Meu desempenho → Exportar/Importar progresso**.

### Fontes originais

- Concurso atual: https://www.vunesp.com.br/TJSP2602
- 2024: https://www.vunesp.com.br/TJSP2403
- 2023: https://arquivos.qconcursos.com/prova/arquivo_prova/100311/vunesp-2023-tj-sp-oficial-de-justica-prova.pdf
- 2009: https://www.estudegratis.com.br/images/provas/12265-vunesp-2009-tj-sp-oficial-de-justica-prova.pdf

Projeto educacional independente, sem vínculo com TJ-SP ou Vunesp.
