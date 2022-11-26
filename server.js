const express = require('express')
const { Server: HttpServer } = require('http')
const app = express()
const httpServer = new HttpServer(app)
const puerto = process.env.PORT || 8080;
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/forbes', rutas)
app.use(express.static('public'))

const connectedServer = httpServer.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto: ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))