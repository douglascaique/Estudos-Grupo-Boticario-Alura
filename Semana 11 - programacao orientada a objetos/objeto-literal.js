// node objeto-literal.js
// O que é o this?

//conceito de classe - modelo de onde tiramos os objetos
//herança de prototipo


const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome,this.email)
    }
}

user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()

const exibir = function(){
    console.log(this.nome)
}

//metodo bind, usado para prender a execução de uma função a um contexto específico   
const exibirNome = exibir.bind(user)
exibirNome()
exibir()

// quando passamos/atribuimos uma função como valor pra dentro eu ma variavel, não criamos uma ref da função, mas sim uma CÓPIA da função. Uma NOVA função.