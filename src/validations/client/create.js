const { validate, Joi } = require("express-validation");

const clientCreateValidation = validate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports = { clientCreateValidation };
