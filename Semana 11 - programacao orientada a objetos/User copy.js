//node User.js

//classes
// class nomeDaClasse

//método construtor da classe 

class User {
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

const User1 = new User( 'Tchola', 'tcho@g.com', '1998-01-12')
const User2 = new User( 'Fanta', 'fant@g.com', '1998-05-12')

console.log(User1)
console.log(User1.exibirInfos())

console.log(User2)
console.log(User2.exibirInfos())

//mostrar -> objeto tal - prototipo - boolean - o objeto tal é prototipo utilizado por (instancias que usam o prototipo)
//console.log(User.prototype.isPrototypeOf(User1,User2))


console.log(User.prototype.isPrototypeOf(User1,User2))



