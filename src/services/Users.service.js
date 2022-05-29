const bcrypt = require('bcryptjs')
const UsersRepository = require("../repositories/User.repository")

class UsersService {

    findByLogin = async(login) => {
        const user = await UsersRepository.findByLogin(login)

        if (!user) {
            throw { status: 404, error: 'USER_NOT_FOUND' }
        }

        console.log({ user })

        return user
    }

    create = async(user) => {
        if (!user.nome) {
            throw { status: 400, error: 'INVALID_DATA', message: 'User without name' }
        }

        if (!user.login) {
            throw { status: 400, error: 'INVALID_DATA', message: 'User without login' }
        }

        if (!user.senha) {
            throw { status: 400, error: 'INVALID_DATA', message: 'User without password' }
        }

        if (!user.email) {
            throw { status: 400, error: 'INVALID_DATA', message: 'User without email' }
        }

        user.senha = bcrypt.hashSync(user.senha, 8)

        return UsersRepository.create(user)
    }

}

module.exports = new UsersService()