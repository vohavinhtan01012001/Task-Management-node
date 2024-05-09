import Joi from "joi";

export const project= Joi.object(
    {
        title:Joi.string().required(),
        description:Joi.string().required(),
        favorite: Joi.number().valid(0, 1).required(),
        color: Joi.string().required(),
        userId: Joi.number().required(),
    }
);