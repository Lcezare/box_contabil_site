// Carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require("./routes/admin")
    const path = require("path")
    const mongoose = require('mongoose')

// Configurações
    // Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // Handlebars
    app.engine('handlebars', handlebars.engine({defaltLayout: 'main'}))
    app.set('view engine', 'handlebars')
   
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/blogapp").then(() => {
            console.log("Conectado ao Mongo")
        }).catch((err) => {
            console.log("[ERRO] "+err)
        })
    
    // Public
        app.use(express.static(path.join(__dirname,"public")))

        app.use((req, res, next) => {
            console.log("OI EU SOU UM MIDDLEWARE")
            next();
        })
// Rotas
    app.use('/admin', admin)

// Outros

const PORT = 8081
app.listen(PORT,() => {
    console.log("Servidor rodando!")
})

