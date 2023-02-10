const { Router } = require('express')
const routes = Router()
const path = require('path')
const auth = require("../middlewares/isAuth")
const {createProduct, getByLocation, getByPrice, renderProducts, renderProductById, getByName, deleteById} = require("../controllers/houseController.js")
const {formContact} = require("../controllers/mailerController.js")
const routerUser = require("./routerUser.js")

routes.use(routerUser);

routes.get('/ventas', renderProducts)

routes.get('/micuenta', auth, getByName)

routes.get('/ventas/price/:price', getByPrice)

routes.get('/ventas/category/:location', getByLocation)

routes.get('/ventas/:_id', renderProductById)

routes.get('/delete/:_id', deleteById)

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
routes.post('/', formContact)

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