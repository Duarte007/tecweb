const UsersService = require('../services/Users.service')

class UsersController {

    create = async(req, res) => {
        try {
            const body = req.body
            const user = await UsersService.create(body)
            return res.status(201).json(user)
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

module.exports = new UsersController()