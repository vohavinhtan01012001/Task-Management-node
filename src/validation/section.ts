import Joi from "joi";

export const section= Joi.object(
    {
        title:Joi.string().required(),
        projectId:Joi.number().required(),
        userId:Joi.number().required(),
    }
);

export const sectionUpdate= Joi.object(
    {
        title:Joi.string(),
        projectId:Joi.number(),
        userId:Joi.number(),
    }
);