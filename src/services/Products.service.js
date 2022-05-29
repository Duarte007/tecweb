const ProductsRepository = require("../repositories/Products.repository")

class ProductsService {
    getAll = async() => {
        return ProductsRepository.getAll()
    }

    getById = async(id) => {
        const product = await ProductsRepository.getById(id)

        if (!product) {
            throw { status: 404, error: 'PRODUCT_NOT_FOUND' }
        }

        return product
    }

    create = async(product) => {
        if (!product.descricao) {
            throw { status: 400, error: 'INVALID_DATA', message: 'Product without description' }
        }

        if (!product.valor) {
            throw { status: 400, error: 'INVALID_DATA', message: 'Product without price' }
        }

        return ProductsRepository.create(product)
    }

    update = async(id, productUpdates) => {
        try {

            await this.getById(id)

            if (!productUpdates.descricao) {
                throw { status: 400, error: 'INVALID_DATA', message: 'Product without description' }
            }

            if (!productUpdates.valor) {
                throw { status: 400, error: 'INVALID_DATA', message: 'Product without price' }
            }

            console.log({ productUpdates })

            return ProductsRepository.update(id, productUpdates)
        } catch (error) {
            console.log("!A")
            console.log({ error })
            throw new Error(error)
        }
    }

    delete = async(id) => {
        await this.getById(id)
        return ProductsRepository.delete(id)
    }
}

module.exports = new ProductsService()