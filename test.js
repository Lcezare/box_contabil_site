/* Criar servidor */
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('cadastro', 'root', '1234', {
//     host: "localhost", 
//     dialect: 'mysql'
// })

/* Verificar se estar rodando ok*/
// sequelize.authenticate().then(function(){
//     console.log('Funcionando!')
// }).catch(function(erro){
//     console.log('Não funcionando: '+erro)
// })

// /* Gerar model, ou seja, modelo de tabela no banco de dados */
// const Postagem = sequelize.define('postagens', {
//     titulo: {
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

/* Postagem.sync({force: true})      /* Esse comando manda criar o model */

// const Usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// })

/* Usuario.sync({force: true})      /* Esse comando manda criar o model */

// # Gerar uma postagem 
// Postagem.create({
//     titulo: "Primeira postagem",
//     conteudo: "sfafsdakdfoifbondobnsdogbsodigbnosidnbosdnbosndobnsdobnsodinbosidnboisdboisdobinsdoibns"
// })

// # Gerar a criação de um usuário
// Usuario.create({
//     nome: "Leonardo",
//     sobrenome: "Jordão de Cezare",
//     idade: "33",
//     email: "Lcezare@gmail.com"
// })