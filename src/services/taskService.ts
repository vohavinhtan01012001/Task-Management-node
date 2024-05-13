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


export const getTaskService = async (sectionId:number) => {

    const tasks= await Task.findAll({where: {sectionId:sectionId}});
    const listTask = tasks.sort((a, b) => a.priority - b.priority);
    return listTask;
};


export const updatePriorityService = async (priorities:any[]) =>{
    if(priorities.length <= 0)
    {
        throw new Error("Please Not enough information");
    }
    else{
        priorities.forEach( async(item) =>{
            await Task.update({priority: item.priority},{where:{id:item.id}});
        });
    }
};