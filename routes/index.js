const { Router } = require('express')
const routes = Router()
const path = require('path')
const {getById, createProduct, updateProducts, deleteById, getByLocation, renderProducts, renderProductById} = require("../controllers/houseController.js")
 
routes.get('/ventas', renderProducts)

routes.get('/ventas/category/:location', getByLocation)

routes.get('/ventas/:_id', renderProductById)

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

routes.get('/alquiler', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/alquiler.html"))
})
routes.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/contacto.html"))
})
routes.get('/aboutUs', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/aboutUs.html"))
})

routes.post('/createProduct', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/createProduct.html"))
})

module.exports = routes