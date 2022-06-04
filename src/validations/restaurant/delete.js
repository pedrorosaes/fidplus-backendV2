const { validate, Joi } = require("express-validation");

const restaurantDeleteById = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

module.exports = { restaurantDeleteById };
