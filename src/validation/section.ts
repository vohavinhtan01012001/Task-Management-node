import Joi from "joi";

export const section= Joi.object(
    {
        title:Joi.string().required(),
        projectId:Joi.number().required(),
        userId:Joi.number().required(),
    }
);