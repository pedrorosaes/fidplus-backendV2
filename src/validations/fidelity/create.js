const { validate, Joi } = require("express-validation");

const fidelityCreateValidation = validate({
  body: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    restaurant_id: Joi.string().required(),
  }),
});

module.exports = { fidelityCreateValidation };
