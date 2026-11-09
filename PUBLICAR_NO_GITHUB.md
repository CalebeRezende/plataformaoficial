# Publicar a Trilha TJ-SP no GitHub Pages

**Não envie só o arquivo ZIP ao repositório**: descompacte e publique o conteúdo, mantendo `index.html` na raiz do repositório.

## Opção A — Pelo navegador (sem instalar nada)

1. Entre em https://github.com/new e crie o repositório `trilha-tjsp` (ou outro nome).
2. Descompacte `Trilha_TJSP_2027_GitHub_Pages_Completa.zip` no computador.
3. Abra o repositório criado e selecione **Add file → Upload files**.
4. Envie o `index.html`, `.nojekyll`, `sw.js`, `manifest.webmanifest`, `README.md` e os diretórios `dados`, `icons`, `scripts` (e este guia). Faça commit na branch `main`.
5. Se necessário, repita a operação para as pastas com seus arquivos. Não altere a estrutura de diretórios.
6. Abra **Settings → Pages**; em **Build and deployment**, escolha **Deploy from a branch**. Selecione `main` e `/(root)` e salve.
7. O endereço ficará no formato `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`. Confira-o em **Settings → Pages → Visit site**.

## Opção B — Pelo terminal com Git

```bash
git init
git add .
git commit -m "Publicar simulador TJ-SP 2027 completo"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/trilha-tjsp.git
git push -u origin main
```

Crie primeiro o repositório vazio no GitHub e substitua `SEU-USUARIO` e o nome do repositório. Depois ative **Settings → Pages → Deploy from a branch / main / (root)**.

## Verificações

- O endereço deve abrir o **Painel**, com 8 abas no menu.
- Em **Questões autorais**, as alternativas devem aparecer diretamente.
- Em **Provas reais**, selecione 2024, 2023 ou 2009; abra o PDF original e responda na folha de respostas.
- Em **Meu desempenho**, exporte um JSON para guardar um backup dos seus resultados.
- Todos os dados (questões, provas e gabaritos) já estão incorporados ao `index.html`.

### Dúvidas comuns

**GitHub mostrou o README, não o site:** abra a URL do GitHub Pages (normalmente `github.io/...`), não a página do repositório (`github.com/...`).

**Erro 404:** confira se há um `index.html` no nível principal da branch `main` e se Pages está configurado para a raiz.

**O PDF não aparece dentro do site:** use **Abrir prova original**; alguns servidores externos não permitem incorporação. Você também pode baixar o PDF e selecionar **Carregar PDF baixado no dispositivo**.

**As respostas sumiram em outro celular:** o progresso é salvo localmente; importe o arquivo de backup JSON exportado do primeiro dispositivo.
