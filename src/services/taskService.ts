import Section from "../models/Section";
import Task from "../models/Task";




export const createTaskService = async (payload:any) => {
    let task;
    const tasks = await Task.findAll({where:{ sectionId: payload.sectionId}});
    if(tasks.length > 0){
        const { priority } = tasks.reduce((
            max, current) => {
            return max.priority > current.priority ? max : current;
        }, tasks[0]);
        task = await Task.create({...payload, priority: priority + 1});
    }
    else{
        task = await Task.create(payload);
    }
    return task;
};

export const createSubTaskService = async (id:number,payload:any) => {
    let task;
    const tasks = await Task.findAll({where:{ sectionId: payload.sectionId,subTaskId: id}});
    if(tasks.length > 0){
        const { priority } = tasks.reduce((
            max, current) => {
            return max.priority > current.priority ? max : current;
        }, tasks[0]);
        task = await Task.create({...payload, subTaskId: id, priority: priority + 1});
    }
    else{
        task = await Task.create({...payload,subTaskId: id});
    }
    return task;
};



export const getTaskService = async (sectionId:number) => {
    const tasks= await Task.findAll({where: {sectionId:sectionId, status: 0},include:[Section]});
    console.log(tasks);
    const listTask = tasks.sort((a, b) => a.priority - b.priority);
    return listTask;
};



export const getSubTaskService = async (id:number) => {
    const tasks= await Task.findAll({where: {subTaskId:id},include:[Section]});
    const listTask = tasks.sort((a, b) => a.priority - b.priority);
    return listTask;
};


export const updatePriorityService = async (priorities:any[]) =>{
    try {
        if(priorities.length <= 0)
        {
            throw new Error("Please Not enough information");
        }
        else{
            priorities.forEach( async(item) =>{
                await Task.update({priority: item.priority},{where:{id:item.id}});
            });
        }
    } catch (error) {
        throw new Error(error);
    }
};


export const updateStatusService = async (id: number) => {
    try {
        if (!id) {
            throw new Error("ID not provided");
        }

        const checkTask = await Task.findOne({ where: { id } });
        if (!checkTask) {
            throw new Error("Task not found");
        }

        await Task.update({ status: 1 }, { where: { id } });

        const updatedTask = await Task.findOne({ where: { id } });
        return updatedTask;
    } catch (error: any) {
        throw new Error(error.message || "An unexpected error occurred");
    }
};

export const updateTaskService = async (id: number, payload: any) => {
    try {
        if (!id) {
            throw new Error("ID not provided");
        }

        const checkTask = await Task.findOne({ where: { id } });
        if (!checkTask) {
            throw new Error("Task not found");
        }

        await Task.update({ ...payload }, { where: { id } });

        const updatedTask = await Task.findOne({ where: { id } });
        return updatedTask;
    } catch (error: any) {
        throw new Error(error.message || "An unexpected error occurred");
    }
};

export const UpdateTaskMoveToSectionService = async (id: number, sectionId: number) => {
    try {
        if (!id) {
            throw new Error("ID not provided");
        }
        const checkTask = await Task.findOne({ where: { id } });
        const sectionIdCheck = await Section.findOne({ where: { id: sectionId} });
        if (!checkTask && !sectionIdCheck) {
            throw new Error("Task or Section not found");
        }
        await Task.update({ sectionId }, { where: { id } });

        const updatedTask = await Task.findOne({ where: { id } });
        return updatedTask;
    } catch (error: any) {
        throw new Error(error.message || "An unexpected error occurred");
    }
};