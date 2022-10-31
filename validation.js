const Joi = require('joi');
const registerValidation = data => {
const Joischema = Joi.object({
    name: Joi.string()
    .min(6)
    .required(),
    email: Joi.string()
    .min(6)
    .required()
    .email(),
    password: Joi.string()
    .min(6)
    .required()
    });
    return Joischema.validate(data);
};
const loginValidation = data => {
    const Joischema = Joi.object({
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(6)
        .required()
        });
        return Joischema.validate(data);
    };

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;