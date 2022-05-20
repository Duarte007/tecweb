const ProductsRepository = require("../repositories/Products.repository")

class ProductsService {
    getAll = () => {
        return ProductsRepository.getAll()
    }

    getById = (id) => {
        const product = ProductsRepository.getById(id)

        if (!product) {
            throw { status: 404, error: 'PRODUCT_NOT_FOUND' }
        }

        return product
    }

    create = (product) => {
        if (!product.name) {
            throw { status: 400, error: 'INVALID_DATA', message: 'Product without name' }
        }

        if (!product.price) {
            throw { status: 400, error: 'INVALID_DATA', message: 'Product without price' }
        }

        return ProductsRepository.create(product)
    }

    update = (id, productUpdates) => {
        this.getById(id)

        if (!productUpdates.name) {
            throw { status: 400, error: 'INVALID_DATA', message: 'Product without name' }
        }

        if (!productUpdates.price) {
            throw { status: 400, error: 'INVALID_DATA', message: 'Product without price' }
        }

        return ProductsRepository.update(id, productUpdates)
    }

    delete = (id) => {
        this.getById(id)
        return ProductsRepository.delete(id)
    }
}

module.exports = new ProductsService()