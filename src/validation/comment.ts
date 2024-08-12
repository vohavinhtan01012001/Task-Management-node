import Joi from "joi";

export const comment= Joi.object(
    {
        comment:Joi.string().required(),
        taskId:Joi.number().required(),
        userId: Joi.number().required(),
    }
);