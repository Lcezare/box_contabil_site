// Colocar o Path nas ferramentas avançadas do Window, pasta bin
// Ligar servidor no cmd 'mongod'
// Em outro cmd 'Mongo' para rodar

const mongoose = require("mongoose")

// Configuração Mongoose
    // mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/aprendendo", {
        // useMongoClient: true
    }).then(() => {
        console.log("MongoDB conectado...")
    }).catch((err) => {
        console.log("Deu erro: " + err)
    })

// Definindo Model
    const UsuariosSchema = mongoose.Schema({

        nome: {
            type: String,
            require: true // Para inserir campo obrigatório
        },
        sobrenome: {
            type: String,
            require: true            
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })

// Colection

    mongoose.model('usuarios', UsuariosSchema) // Nome do conjunto dos usuários

    const Victor = mongoose.model('usuarios')

    new Victor({
        nome: "Victor",
        sobrenome: "Lima",
        idade: "19",
        email: "victor@mail.com",
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário cadastrado!")
    }).catch((err) => {
        console.log("[ERRO] "+err)
    })

