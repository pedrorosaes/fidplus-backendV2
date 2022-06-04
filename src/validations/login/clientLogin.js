const { validate, Joi } = require("express-validation");

const clientLoginValidation = validate({
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

module.exports = { clientLoginValidation };
