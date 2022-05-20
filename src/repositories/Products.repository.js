class ProductsRepository {

    productsList = {
        products: [
            { id: 1, name: 'Toddy', price: 12 },
            { id: 2, name: 'Nescau', price: 9 },
            { id: 3, name: 'Ovomaltine', price: 15 },
        ]
    }

    getAll = () => {
        return this.productsList.products
    }

    getById = (id) => {
        return this.productsList.products.find(product => product.id === id)
    }

    create = (product) => {
        const ids = this.productsList.products.map(product => product.id)

        const maxId = Math.max(...ids)

        const newProduct = {
            id: maxId + 1,
            ...product
        }

        this.productsList.products.push(newProduct)

        return newProduct
    }

    update = (id, productUpdates) => {
        const index = this.productsList.products.findIndex(product => product.id === id)
        this.productsList.products[index] = {
            ...this.productsList.products[index],
            ...productUpdates
        }
        return this.productsList.products[index]
    }

    delete = (id) => {
        const index = this.productsList.products.findIndex(product => product.id === id)
        this.productsList.products.splice(index, 1)
    }
}

module.exports = new ProductsRepository()