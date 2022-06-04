const { clientCreateValidation } = require("./create");
const { clientListOneValidation } = require("./find");
const { updateClientById } = require("./update");
const { deleteById } = require("./delete");

module.exports = {
  clientCreateValidation,
  clientListOneValidation,
  updateClientById,
  deleteById,
};
