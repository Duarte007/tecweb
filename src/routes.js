const { Router } = require('express')

const ProductsController = require('./controllers/Products.controller')

const routes = Router()

routes.get('/products', ProductsController.getAll)

routes.get('/products/:id', ProductsController.getById)

routes.post('/products', ProductsController.create)

routes.put('/products/:id', ProductsController.update)

routes.delete('/products/:id', ProductsController.delete)

module.exports = { routes }