const express = require("express");

const { clientController } = require("../controllers/clientController");
const { restaurantController } = require("../controllers/restaurantController");
const { authController } = require("../controllers/authController");
const { fidelityController } = require("../controllers/fidelityController");
const { restaurantCreateValidation } = require("../validations/restaurant");
const {
  clientCreateValidation,
  clientListOneValidation,
  updateClientById,
  deleteById,
} = require("../validations/client");
const { fidelityCreateValidation } = require("../validations/fidelity");
const {
  restaurantLoginValidation,
  clientLoginValidation,
} = require("../validations/login");
const authJWT = require("../middlewares/authJWT");
const routes = express.Router();

// Routes for Restaurant

routes.post(
  "/restaurant",
  restaurantCreateValidation,
  restaurantController.restaurantSignUp
);
routes.get("/restaurant", restaurantController.listAll);
routes.get("/restaurant/:id", authJWT, restaurantController.listById);
routes.delete(
  "/restaurant/:id",
  authJWT,
  restaurantController.deleteRestaurant
);
routes.put("/restaurant/:id", authJWT, restaurantController.restaurantUpdate);

// Routes for Clients

routes.post("/client", clientCreateValidation, clientController.clientSignIn);
routes.get(
  "/client/:id",
  authJWT,
  clientListOneValidation,
  clientController.listById
);
routes.delete(
  "/client/:id",
  authJWT,
  deleteById,
  clientController.deleteClient
);
routes.put(
  "/client/:id",
  authJWT,
  updateClientById,
  clientController.clientUpdate
);

// Route Login

routes.post("/login/client", clientLoginValidation, authController.clientLogin);
routes.post(
  "/login/restaurant",
  restaurantLoginValidation,
  authController.restaurantLogin
);
routes.post("/login/me", authJWT, authController.tokenLogin);

// Testes

routes.post(
  "/fidelity",
  fidelityCreateValidation,
  fidelityController.createFidelity
);
routes.get(
  "/fidelity/:id",
  authJWT,
  fidelityController.listAllFidelitysByRestaurant
);
routes.delete("/fidelity/:id", authJWT, fidelityController.deleteFidelity);

module.exports = routes;
