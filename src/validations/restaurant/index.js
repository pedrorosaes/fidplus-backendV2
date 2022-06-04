const { restaurantCreateValidation } = require("./create");
const { restaurantDeleteById } = require("./delete");
const { updateRestaurantById } = require("./update");
const { restaurantFindValidation } = require("./find");

module.exports = {
  restaurantCreateValidation,
  restaurantDeleteById,
  updateRestaurantById,
  restaurantFindValidation,
};
