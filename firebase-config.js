// Configuração da sincronização entre dispositivos (Firebase).
// Esses valores são públicos por natureza (ficam visíveis no navegador); a proteção dos dados
// é feita pelas regras do Firestore (firestore.rules), que só permitem a cada usuário ler e
// gravar o próprio progresso. Para desativar a sincronização, troque o objeto por null.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBidEbaf4hOFo71RqfUSHQbZM9gg_GZvhU",
  authDomain: "trilhaoficial-a182f.firebaseapp.com",
  projectId: "trilhaoficial-a182f",
  storageBucket: "trilhaoficial-a182f.firebasestorage.app",
  messagingSenderId: "498361725655",
  appId: "1:498361725655:web:dbb0a15e14155d8481b692"
};
