# Trilha TJ-SP 2027 — Oficial de Justiça

Site estático independente, pronto para **GitHub Pages**, preenchido com 70 questões didáticas autorais e 3 provas reais (280 questões) em folha de respostas interativa, com gabaritos de 2024, 2023 e 2009.

## Publicar no GitHub Pages

1. **Descompacte o ZIP**. O GitHub precisa receber **os arquivos dentro da pasta**, não o arquivo `.zip` isolado.
2. No [GitHub](https://github.com/new), crie um repositório, por exemplo `trilha-tjsp`. Use **Public** se estiver no plano gratuito.
3. No repositório, clique em **Add file → Upload files**, selecione todo o conteúdo descompactado (incluindo `index.html` no diretório principal) e faça **Commit changes** na branch `main`. Se o navegador não aceitar upload de pastas, use GitHub Desktop ou envie as pastas separadamente.
4. Vá a **Settings → Pages → Build and deployment → Deploy from a branch**. Selecione **main** e **/(root)**; clique em **Save**.
5. Em **Settings → Pages**, clique em **Visit site** quando estiver publicado. URL normal: `https://SEU-USUARIO.github.io/trilha-tjsp/`.

Guia com mais detalhes: [PUBLICAR_NO_GITHUB.md](PUBLICAR_NO_GITHUB.md).

## O que já vem carregado

- **70 questões autorais** com cinco alternativas, comentário, tema e legislação/referências.
- **280 questões de provas reais**, com gabaritos marcados nos sistemas para 2024 (versão 1), 2023 (versão 4) e 2009 (versão 1).
- **PDFs originais por links externos**, que você lê ao lado da folha de respostas. Os enunciados originais não estão transcritos no HTML; o usuário pode carregar no navegador seu PDF baixado.
- **29 trilhas temáticas**; recomendação orientada pelos erros; simulador de 70 questões; **2 propostas discursivas**.
- Histórico de respostas e progresso salvo via **localStorage** no dispositivo; exportação/importação em JSON; sem contas nem servidor.
- Funciona como um **site estático**, sem Node, Python, build ou banco de dados. A primeira visita online permite usar as questões autorais offline em dispositivos compatíveis; PDFs externos necessitam internet.

## Estrutura dos arquivos

- `index.html`: aplicativo completo, **único arquivo necessário para a interface**; dados já embutidos.
- `dados/questoes_originais.json`: questões autorais, editáveis.
- `dados/provas_reais_metadados.json`: provas reais, gabaritos, faixas de disciplinas e fontes.
- `dados/topicos.json`: orientações de estudo por módulo.
- `scripts/sincronizar_banco.py`: opcional, atualiza o banco embutido em `index.html` se você alterar os JSONs.
- `scripts/validar_banco.py`: valida integridade dos dados.
- `icons/`, `manifest.webmanifest`, `sw.js`: suporte para ícone, instalação no celular e navegação offline.
- `.nojekyll`: evita processamento Jekyll no GitHub Pages.

## Como editar as questões

Edite os arquivos JSON em `dados/`, execute `python scripts/sincronizar_banco.py` e depois `python scripts/validar_banco.py`. Faça commit do `index.html` atualizado. Os JSONs são fontes de manutenção; o site **não os busca por rede**.

## Limitações e avisos

- **Direitos de terceiros:** o ZIP **não inclui cópias dos PDFs das provas** nem transcrições integrais. Os cadernos originais são acessados pelos endereços públicos nas provas.
- Uma fonte externa pode sair do ar ou bloquear exibição em iframe; existe botão para abrir em nova aba e opção de carregar PDF do dispositivo.
- Atenção à **versão** de cada caderno ao corrigir. Em 2023, as questões 49 e 67 estão anuladas. Não existe verificação independente de todas as retificações possíveis para 2009.
- Questões de provas antigas podem refletir legislação ou informática desatualizadas. Valide sempre com o Edital TJSP2602 e normas vigentes. As 280 questões reais têm gabarito, porém não apresentam comentários detalhados por questão.
- O GitHub Pages hospeda os arquivos públicos. O progresso **não** é sincronizado entre dispositivos; para transferi-lo, use **Meu desempenho → Exportar/Importar JSON**.

### Fontes originais

- Concurso atual: https://www.vunesp.com.br/TJSP2602
- 2024: https://www.vunesp.com.br/TJSP2403
- 2023: https://arquivos.qconcursos.com/prova/arquivo_prova/100311/vunesp-2023-tj-sp-oficial-de-justica-prova.pdf
- 2009: https://www.estudegratis.com.br/images/provas/12265-vunesp-2009-tj-sp-oficial-de-justica-prova.pdf

Projeto educacional independente, sem vínculo com TJ-SP ou Vunesp.
