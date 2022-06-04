const { validate, Joi } = require("express-validation");

const listAllByIdValidation = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});

module.exports = { listAllByIdValidation };
