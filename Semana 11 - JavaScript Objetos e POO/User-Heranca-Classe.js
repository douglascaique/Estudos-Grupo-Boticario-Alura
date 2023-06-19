//node User-Heranca-Classe

//classes
// class nomeDaClasse

//método construtor da classe 


//objeto
export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    //propriedades
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }
    //comportamentos
    exibirInfos() {
        return `${this.#nome}, ${this.#email}`
    }

}

//instancias






