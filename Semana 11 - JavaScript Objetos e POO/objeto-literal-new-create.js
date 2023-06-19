// node objeto-literal-new-create.js
// O que é o this?

//Operador New ou Object.create()

//new - palavra chave para criarn ovos objetos atraves de constuctor
/*
Serve para criar instancias atraves de uma função construtoras
Funçoes construtoras sao equivalentes a classes 

*/ 


function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}


// comportament com o new
/*  Quando criamos um novo objeto apartir do "new" usando o Construtor, 
que é o USER, uma FUNÇÃO CONSTRUTORA

O js fara´dduas coisa
                1) receber o novo objeto
                2) checar no prototype o que sera encaixado na cadeia
                3) nesse caso, o USER será o prototipo do objeto novoUser, criaddo agora

*/
//const novoUser = new User("Douglas", "D@d.com")
//console.log(novoUser.exibirInfos())


// usando o object.create
//this vai se referir ao contexto de usar que vamos aproveitar dentro de admin
//user.call, chamada de metodo a partir de user, para proveitar coisas que estão em user, propriedades

//
function Admin(role) {
    User.call(this, 'Douglas', 'd@d.com')
    this.role = role || 'estudante'
}


// passamos para dentro da propriedade prototype admin, as proprierdades de user
//criando o objeto Admin com as propriedades de User
//Sendo passaddos como base para dentro do objeto Admin

//crianddo um novo objeto, Admin, passando apenas o role
//Admin.prototype = Object.create(User.prototype)
//const novoUser = new Admin('admin')

//console.log(novoUser.exibirInfos())
//console.log(novoUser.role)


const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(nome){
        return nome
    }
}

//const novoUser = Object.create(user)
//console.log(novoUser.exibirInfos("Douglas"))

//console.log(user.isPrototypeOf(novoUser))

