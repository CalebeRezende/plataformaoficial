// Configuração da sincronização entre dispositivos (Firebase).
// Enquanto estiver como null, o site funciona normalmente, salvando apenas no navegador.
// Para ativar, siga CONFIGURAR_SINCRONIZACAO.md e cole aqui o objeto firebaseConfig do seu projeto.
// Esses valores são públicos por natureza (ficam visíveis no navegador); a proteção dos dados
// é feita pelas regras do Firestore, que só permitem a cada usuário ler e gravar o próprio progresso.
window.FIREBASE_CONFIG = null;
