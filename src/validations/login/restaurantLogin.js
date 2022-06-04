const { validate, Joi } = require("express-validation");

const restaurantLoginValidation = validate({
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

module.exports = { restaurantLoginValidation };
