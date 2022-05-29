const { Router } = require("express");

const ProductsController = require("./controllers/Products.controller");
const UsersController = require("./controllers/Users.controller");
const AuthMiddleware = require("./middlewares/auth")

const routes = Router();

routes.post("/ping", (req, res) => {
    return res.status(200).send("pong!");
});

routes.post("/user", UsersController.create);

routes.post("/authenticate", AuthMiddleware.generateToken);

routes.use(AuthMiddleware.checkToken);

routes.get("/products", ProductsController.getAll);
routes.get("/products/:id", ProductsController.getById);
routes.post("/products", ProductsController.create);
routes.put("/products/:id", ProductsController.update);
routes.delete("/products/:id", ProductsController.delete);

module.exports = { routes };