const { validate, Joi } = require("express-validation");

const clientListOneValidation = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

module.exports = { clientListOneValidation };
