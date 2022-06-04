const { validate, Joi } = require("express-validation");

const restaurantFindValidation = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});

module.exports = { restaurantFindValidation };
