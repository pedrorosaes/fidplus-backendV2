const { validate, Joi } = require("express-validation");

const updateClientById = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
  }),
});

module.exports = { updateClientById };
