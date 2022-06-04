const { validate, Joi } = require("express-validation");

const deleteById = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});

module.exports = { deleteById };
