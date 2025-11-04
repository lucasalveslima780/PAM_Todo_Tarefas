
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

class FirebaseAuthService{
    #auth;
    constructor(app){
        this.#auth = getAuth (app);
}

criarUsuarioComEmailESenha(email, senha){
    createUserWithEmailAndPassword(this.#auth, email, senha)
        .then((credenciaisdousuario) =>{
            console.log("Usuario Criado com sucesso: ", credenciaisdousuario.user);
        })
        .catch((error) => {
            console.error("Erro ao criar usuario: ", erro);
        })
    
    }
}

export default FirebaseAuthService;