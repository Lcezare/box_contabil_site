const mongoose = require("mongoose")


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
}).then(() => {
    console.log("Mongo conectado")
}).catch((err) => {
    console.log("Deu erro"+err)
})