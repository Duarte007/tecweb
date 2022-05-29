const { connection } = require("../configs/database")

class UsersRepository {

    findByLogin = async(login) => {
        return connection.select('*').from('usuario').where({ login })
            .then(user => user[0])
            .catch(err => {
                throw new Error({
                    message: 'Erro ao recuperar usuário - ' + err.message
                })
            })
    }

    create = async(user) => {
        return connection('usuario')
            .insert(user, ['id'])
            .catch(err => {
                throw new Error({
                    message: 'Erro ao cadastrar usuário - ' + err.message
                })
            })
    }

}

module.exports = new UsersRepository()