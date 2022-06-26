const express = require('express');
const routes = require('./routes');
const db = require ('./database')
const upload = require ('./config/upload')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(upload.any())
app.use(express.static('src/public/images'))

db.hasConnection()

app.use(routes)

app.listen(4000, () => console.log('Servidor rodando na porta 4000'))