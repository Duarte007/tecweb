var jwt = require("jsonwebtoken");

// @TODO: create auth var, create User repository
class AuthMiddleware {
    async verifyMiddleware(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ msg: "Token não fornecido!" });
        }

        try {
            const decoded = jwt.verify(authHeader, auth.secret);
            req.userId = decoded.id;

            return next();
        } catch (err) {
            return res.status(401).json({ error: "Token inválido!" });
        }
    }
    generateToken = async(req, res) => {
        if (req.body.user && req.body.password) {
            const user = await User.getUserInfo(req.body);
            if (!user[0]) {
                return res.status(401).json({ error: "Usuário ou senha inválidos!" });
            }
            const { id } = user[0];
            const { secret, ttl } = auth;
            let token;
            token = jwt.sign({ id }, secret, {
                expiresIn: ttl,
            });
            return res.status(200).json({ auth: true, token: token });
        }
        return res.status(401).json({ error: "Usuário ou senha inválidos!" });
    };
}

module.exports = new AuthMiddleware();