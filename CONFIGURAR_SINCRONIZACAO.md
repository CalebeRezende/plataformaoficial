# Sincronizar o progresso entre dispositivos

Com a sincronização ativa, você entra com sua conta Google no site e o progresso (questões, provas reais, simulados, rascunhos das discursivas, vídeos assistidos e guia de estudo) fica salvo na nuvem e aparece em todos os computadores e celulares em que você entrar. É gratuito no plano Spark do Firebase.

Leva cerca de 5 minutos e só precisa ser feito uma vez.

## 1. Criar o projeto
1. Acesse https://console.firebase.google.com e entre com sua conta Google.
2. Clique em **Criar um projeto** (ou **Adicionar projeto**), dê um nome (ex.: `trilha-tjsp`) e conclua. O Google Analytics pode ser desativado.

## 2. Ativar o login com Google
1. No menu lateral: **Criação > Authentication > Vamos começar**.
2. Na aba **Método de login**, escolha **Google**, ative, selecione seu e-mail de suporte e **Salve**.
3. Na aba **Configurações > Domínios autorizados**, clique em **Adicionar domínio** e informe `caleberezende.github.io`.

## 3. Criar o banco de dados
1. No menu: **Criação > Firestore Database > Criar banco de dados**.
2. Escolha a localização `southamerica-east1 (São Paulo)` e o **modo de produção**.
3. Na aba **Regras**, apague o conteúdo e cole o conteúdo do arquivo `firestore.rules` deste repositório. Clique em **Publicar**.

## 4. Registrar o site e copiar a configuração
1. Na página inicial do projeto (ícone de engrenagem > **Configurações do projeto**), em **Seus apps**, clique no ícone **</>** (Web).
2. Dê um apelido (ex.: `site`), **não** marque o Firebase Hosting e clique em **Registrar app**.
3. Copie o objeto `firebaseConfig` mostrado, parecido com:
   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "trilha-tjsp.firebaseapp.com",
     projectId: "trilha-tjsp",
     storageBucket: "trilha-tjsp.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abc123"
   };
   ```

## 5. Colar no site
No arquivo `firebase-config.js`, troque `null` pelo objeto copiado:
```js
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "trilha-tjsp.firebaseapp.com",
  projectId: "trilha-tjsp",
  storageBucket: "trilha-tjsp.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
```
Faça commit. Depois de publicado, clique em **Entrar** no topo do site em cada dispositivo.

Esses valores não são senhas: eles ficam visíveis no navegador de qualquer site que usa Firebase. Quem protege os dados são as regras do passo 3, que só deixam cada conta acessar o próprio progresso.

## Como os dados são combinados
- Ao entrar num aparelho, o progresso dele é **somado** ao que já está na nuvem (nada é perdido).
- Respostas e simulados de todos os aparelhos são reunidos; nas provas reais vale a versão mais recente de cada caderno.
- As alterações são enviadas automaticamente cerca de 1,5 s depois de cada resposta e aparecem em tempo real nos outros aparelhos abertos.
- "Apagar meu progresso" com a conta conectada apaga também na nuvem.
