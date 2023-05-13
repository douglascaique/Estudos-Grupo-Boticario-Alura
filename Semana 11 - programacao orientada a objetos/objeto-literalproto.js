// node objeto-literalproto.js
// O que é o this?

//conceito de classe - modelo de onde tiramos os objetos
//herança de prototipo


const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome,this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
   criarCurso(){
    console.log("Curso Criado!")
   }
}

//Object.setPrototypeOf(Objeto que vai herdar as propriedades, Objeto origem das propriedades )
Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()