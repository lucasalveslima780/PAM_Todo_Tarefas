
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

class FirebaseAuthService{
    #auth;
    constructor(app){
        this.#auth = getAuth (app);
}
};

export default FirebaseAuthService;

criarUsuarioComEmailESenha(email, senha){

    criarUsuarioComEmailESenha(this.#auth, email, senha)
    
    .then((credenciaisdousuario)
    
    )
    
    .cath(()error) => {
    
    }
    
    }