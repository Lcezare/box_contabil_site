const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/ola", function(req, res) {
    res.send("Ola")
})


app.listen(8081);
