import Project from "../models/Project";

export const getProjectAll = async ()=> {
    const projects = await Project.findAll();
    return projects;
};



export const createProject = async (payload: any) => {
    const project = await Project.create(payload);
    return project;
};
  
