const { connection } = require("../configs/database")

class ProductsRepository {

    getAll = async() => {
        return connection.select('*').from('produto')
            .then(produtos => produtos)
            .catch(err => {
                throw new Error({
                    message: 'Erro ao recuperar produtos - ' + err.message
                })
            })
    }

    getById = async(id) => {
        return connection.select('*').from('produto').where({ id })
            .then(produto => produto[0])
            .catch(err => {
                throw new Error({
                    message: 'Erro ao recuperar produto - ' + err.message
                })
            })
    }

    create = async(product) => {
        return connection('produto')
            .insert(product, ['id'])
            .catch(err => {
                throw new Error({
                    message: 'Erro ao cadastrar produto - ' + err.message
                })
            })
    }

    update = async(id, productUpdates) => {
        return connection('produto')
            .where('id', id)
            .update({...productUpdates })
            .catch(err => {
                return Promise.reject({
                    message: 'Erro ao atualizar produto - ' + err.message
                })
            })
    }

    delete = async(id) => {
        return connection('produto')
            .where('id', id)
            .del()
            .catch(err => {
                throw new Error({
                    message: 'Erro ao deletar produto - ' + err.message
                })
            })
    }

}

module.exports = new ProductsRepository()