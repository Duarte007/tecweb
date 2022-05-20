const ProductsService = require('../services/Products.service')

class ProductsController {
    getAll = (req, res) => {
        try {
            const products = ProductsService.getAll()
            return res.status(200).json(products)
        } catch (error) {
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }

    getById = (req, res) => {
        try {
            const id = Number(req.params.id)
            const product = ProductsService.getById(id)
            return res.status(200).json(product)
        } catch (error) {
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }

    create = (req, res) => {
        try {
            const body = req.body
            const newProduct = ProductsService.create(body)
            return res.status(201).json(newProduct)
        } catch (error) {
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }

    update = (req, res) => {
        try {
            const id = Number(req.params.id)
            const body = req.body

            const updatedProduct = ProductsService.update(id, body)

            return res.status(200).json(updatedProduct)
        } catch (error) {
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }

    delete = (req, res) => {
        try {
            const id = Number(req.params.id)

            ProductsService.delete(id)
            return res.status(200).json({})
        } catch (error) {
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }
}

module.exports = new ProductsController()