import Joi from "joi";

export const taskCreate= Joi.object(
    {
        title: Joi.string().required(),
        note: Joi.string().allow(""),
        userId: Joi.number().required(),
        priority: Joi.number(),
        sectionId: Joi.number().required(),
        projectId: Joi.number().required(),
        color: Joi.string().required(),
    }
);