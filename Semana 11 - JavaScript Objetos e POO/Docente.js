import User from "./User-Heranca-Classe.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role= 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo )
    }

    aprovaEstudante(estudante, curso){
        return`Estudante ${estudante} foi aprovado no curso de ${curso}`
    }
}
