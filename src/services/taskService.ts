import Task from "../models/Task";


export const createTaskService = async (payload:any) => {
    const task = await Task.create(payload);
    return task;
};


export const getTaskService = async (sectionId:number) => {
    const tasks= await Task.findAll({where: {sectionId:sectionId}});
    return tasks;
};