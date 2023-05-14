//node User-Heranca-Classe

//classes
// class nomeDaClasse

//método construtor da classe 


//objeto
export default class User {
    //propriedades
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    //comportamentos
    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }

}

//instancias






