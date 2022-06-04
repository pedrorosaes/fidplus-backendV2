const Clients = require("./Clients");
const Fidelitys = require("./Fidelitys");
const Restaurants = require("./Restaurants");

Fidelitys.belongsTo(Restaurants, {
  foreignKey: "restaurant_id",
});

Restaurants.hasMany(Fidelitys, {
  foreignKey: "restaurant_id",
});

module.exports = { Fidelitys, Restaurants, Clients };
