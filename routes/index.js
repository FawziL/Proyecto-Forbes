const { Router } = require('express')
const routes = Router()
const path = require('path')

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = routes