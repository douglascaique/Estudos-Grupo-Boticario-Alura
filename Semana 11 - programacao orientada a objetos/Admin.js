import User from "./User-Heranca-Classe.js";

class Admin extends User{
    constructor(nome, email, nascimento, role= 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo )
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2048-10-15')


console.log(novoAdmin)