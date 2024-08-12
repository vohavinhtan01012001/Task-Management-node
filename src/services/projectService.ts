import Section from "../models/Section";
import Project from "../models/Project";

export const getProjectAll = async (userId:number)=> {
    const projects = await Project.findAll({ where:{ userId:userId }});
    const listProject = projects.sort((a, b) => a.priority - b.priority);
    return listProject;
};



export const createProject = async (payload: any) => {
    const project = await Project.create(payload);
    return project;
};
  

export const getByIdProjectService  = async (id:number) => {
    const project = await Project.findByPk(id);
    return project;
};



export const updatePriorityService = async (priorities:any[]) =>{
    if(priorities.length <= 0)
    {
        throw new Error("Please Not enough information");
    }
    else{
        priorities.forEach( async(item) =>{
            await Project.update({priority: item.priority},{where:{id:item.id}});
        });
    }
};


export const getAllProjectsAndSectionsService = async (userId: number) => {
    try {
        const getProjectsAndSections = await Project.findAll({
            include: [Section],
            where: { userId: userId }
        });
        return getProjectsAndSections;
    } catch (error) {
        throw new Error(error.message);
    }
};