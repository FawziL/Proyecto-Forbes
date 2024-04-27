const { Router } = require('express')
const routes = Router()
const path = require('path')
const auth = require("../middlewares/isAuth")
const {createProduct, getByLocation, getByPriceMenor, getByPriceMayor, renderProducts, renderProductById, getByName, deleteById, updateProductsPlantilla, updateProducts} = require("../controllers/houseController.js")
const {getAll, newClient} = require("../controllers/clientController.js")
const routerUser = require("./routerUser.js")
const compression = require('compression');
const upload = require ('../multer/loadFile.js')

routes.use(compression());
routes.use(routerUser);

routes.get('/ventas', renderProducts)

routes.post('/createProduct', auth, upload.fields([
    { name: 'thumbnailArray', maxCount: 1 },
    { name: 'welcomeThumbnailArray', maxCount: 1 },
    { name: 'benefitThumbnail1Array', maxCount: 1 },
    { name: 'benefitThumbnail2Array', maxCount: 1 },
    { name: 'benefitThumbnail3Array', maxCount: 1 },
    { name: 'detailThumbnailArray', maxCount: 1 },
  ]), createProduct)

routes.get('/micuenta', auth, getByName)

routes.get('/clientes', auth, getAll)

routes.post('/newClient', newClient)

routes.get('/ventas/priceLower/:price', getByPriceMenor)

routes.get('/ventas/priceHigher/:price', getByPriceMayor)

routes.get('/ventas/category/:location', getByLocation)

routes.get('/ventas/:_id', renderProductById)

routes.get('/delete/:_id', auth, deleteById)

routes.get('/update/:_id', auth, updateProductsPlantilla)

routes.post('/update/:_id/update', auth, updateProducts)

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

routes.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/contacto.html"))
})

routes.get('/aboutUs', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/aboutUs.html"))
})

routes.get('/vender', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/vender.html"))
})

module.exports = routes