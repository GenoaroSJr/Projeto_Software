const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

//trabalhar com diretorios
const path = require("path")

//Import Rotas

const login = require("./routes/login")

const tecnico = require("./routes/tecnico")
const vigilante = require("./routes/vigilante")


const admin = require("./routes/admin")
const ordemServico = require("./routes/ordemServico")
const colaborador = require("./routes/colaborador")
const reportes = require("./routes/reportes")

//const mongoose = require('mongoose')

//Configurações
//Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
//Mongoose

//public
app.use(express.static(path.join(__dirname, "public")))



//Rotsa
app.use('/admin', admin)
app.use('/tecnico', tecnico)
app.use('/vigilante', vigilante)
app.use('/login', login)
app.use('/ordemServico', ordemServico)
app.use('/colaborador', colaborador)
app.use('/reportes', reportes)

//Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rodando em http://localhost:8081/ ")
})