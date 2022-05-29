const jwt = require("jsonwebtoken");
const UsersService = require('../services/Users.service')
const bcrypt = require('bcryptjs')

// @TODO: create auth var, create User repository
class AuthMiddleware {
    async checkToken(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ msg: "Token não fornecido!" });
        } else {
            let token = authHeader.split(' ')[1]
            req.token = token
        }

        try {
            const decoded = jwt.verify(req.token, process.env.SECRET_KEY);

            req.userId = decoded.id;

            return next();
        } catch (err) {
            return res.status(401).json({ error: "Token inválido!" });
        }
    }
    generateToken = async(req, res) => {
        if (req.body.login && req.body.senha) {
            const user = await UsersService.findByLogin(req.body.login);
            const { id, senha } = user;

            let checkSenha = bcrypt.compareSync(req.body.senha, senha)

            if (checkSenha) {
                let token;
                token = jwt.sign({ id }, process.env.SECRET_KEY, {
                    expiresIn: 3600,
                });
                return res.status(200).json({ auth: true, ...user, token });
            }
        }
        return res.status(401).json({ error: "Usuário ou senha inválidos!" });
    };
}

module.exports = new AuthMiddleware();