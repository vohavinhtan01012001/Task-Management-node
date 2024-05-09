import Project from "../models/Project";

export const getProjectAll = async (userId:number)=> {
    const projects = await Project.findAll({ where:{ userId:userId }});
    return projects;
};



export const createProject = async (payload: any) => {
    const project = await Project.create(payload);
    return project;
};
  

export const getByIdProjectService  = async (id:number) => {
    const project = await Project.findByPk(id);
    return project;
};