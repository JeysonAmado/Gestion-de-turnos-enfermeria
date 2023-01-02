const Joi = require('joi');

const id=Joi.string();
const name=Joi.string().alphanum().min(3).max(40);
const gender=Joi.string();
const birthday=Joi.date().greater('1-1-1928');
const block=Joi.boolean();

const createNurseSchema=Joi.object({
    id: id.required(),
    name: name.required(),
    gender: gender,
    birthday: birthday.required(),
    block: block,
});


const updateNurseSchema=Joi.object({
    id: id,
    name: name,
    gender: gender,
    birthday: birthday,
    block: block,
});

const getNurseSchema=Joi.object({
    id: id
});

module.exports = {createNurseSchema,updateNurseSchema,getNurseSchema}