import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

class FirebaseAuthService {
  #auth;

  constructor(app) {
    this.#auth = getAuth(app);
  }

  criarUsuarioComEmailESenha(email, senha) {
    return createUserWithEmailAndPassword(this.#auth, email, senha)
      .then(userCredential => {
        console.log("Usuário criado:", userCredential.user);
        alert("Usuário cadastrado com sucesso!");
      })
      .catch(err => {
        console.error("Erro ao criar usuário:", err);
        alert("Erro: " + err.message);
      });
  }

  loginComEmailESenha(email, senha) {
    return signInWithEmailAndPassword(this.#auth, email, senha)
      .then(userCredential => {
        console.log("Login bem-sucedido:", userCredential.user);
        window.location.href = "perfil.html"; // Redireciona
      })
      .catch(err => {
        console.error("Erro no login:", err);
        alert("Erro: " + err.message);
      });
  }

  logout() {
    return signOut(this.#auth).then(() => {
      alert("Logout realizado!");
      window.location.href = "index.html";
    });
  }

  observarAuth(callback) {
    onAuthStateChanged(this.#auth, callback);
  }
}

export default FirebaseAuthService;