const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

// const router = require('./components/message/network')
const router = require('./network/routes')

db('mongodb+srv://user1234:user1234@platzicluster.m9xn5.mongodb.net/telegrom?retryWrites=true&w=majority')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(router)

router(app)

app.use('/app', express.static('public'))

app.listen(3000)
console.log('La aplicación está escuchando en http://localhost:3000')