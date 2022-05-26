const { Router } = require("express");

const ProductsController = require("./controllers/Products.controller");

const routes = Router();

routes.post("/ping", (req, res) => {
  return res.status(200).send("pong!");
});

routes.post("/authenticate", AuthMiddleware.generateToken);

routes.use(AuthMiddleware.verifyMiddleware);

routes.get("/products", ProductsController.getAll);
routes.get("/products/:id", ProductsController.getById);
routes.post("/products", ProductsController.create);
routes.put("/products/:id", ProductsController.update);
routes.delete("/products/:id", ProductsController.delete);

module.exports = { routes };
