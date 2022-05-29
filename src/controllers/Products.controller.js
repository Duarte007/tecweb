const ProductsService = require('../services/Products.service')

class ProductsController {
    getAll = async(req, res) => {
        try {
            const products = await ProductsService.getAll()
            return res.status(200).json(products)
        } catch (error) {
            error = this._handleError(error)
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }

    getById = async(req, res) => {
        try {
            const id = Number(req.params.id)
            const product = await ProductsService.getById(id)
            return res.status(200).json(product)
        } catch (error) {
            error = this._handleError(error)
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }

    create = async(req, res) => {
        try {
            const body = req.body
            const newProduct = await ProductsService.create(body)
            return res.status(201).json(newProduct)
        } catch (error) {
            error = this._handleError(error)
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }

    update = async(req, res) => {
        try {
            const id = Number(req.params.id)
            const body = req.body

            const updatedProduct = await ProductsService.update(id, body)

            return res.status(200).json(updatedProduct)
        } catch (error) {
            error = this._handleError(error)
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
            error = this._handleError(error)
            const status = error.status || 500
            return res.status(status).json(error)
        }
    }

    _handleError(error) {
        if (error instanceof TypeError) {
            error = {
                message: error.message,
                error: error.name,
            }
        }

        return error
    }
}

module.exports = new ProductsController()