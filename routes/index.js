const { Router } = require('express')
const routes = Router()
const path = require('path')
const {getById, createProduct, updateProducts, deleteById, getByLocation, getByPrice, renderProducts, renderProductById} = require("../controllers/houseController.js")
 
routes.get('/ventas', renderProducts)

routes.get('/ventas/price/:price', getByPrice)

routes.get('/ventas/category/:location', getByLocation)

routes.get('/ventas/:_id', renderProductById)

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

/*routes.get('/alquiler', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/alquiler.html"))
})*/

routes.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/contacto.html"))
})

routes.get('/aboutUs', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/aboutUs.html"))
})

routes.get('/alquiler', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/inmuebles.html"))
})

routes.post('/createProduct', createProduct)

module.exports = routes