const { append } = require("express/lib/response");
const Joi = require("joi");
const shortid = require("shortid");

const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate("qqqq"));

const randomPassword = shortid.generate();

console.log(randomPassword);

console.log(passwordSchema.validate(randomPassword));
