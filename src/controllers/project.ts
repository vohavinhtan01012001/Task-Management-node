import { NextFunction, Response } from "express";
import { ApiResponse, customRequest } from "../types/customDefinition";
import { createProject, getByIdProjectService, getProjectAll, updatePriorityService } from "../services/projectService";


export const getProjects = async (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    const projects = await getProjectAll(userId);
    return res.status(200).json({
      projects: projects,
    });
  } catch (err) {
    next(err);
  }
};


export const AddProject = async (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const project = await createProject(payload);
    const response: ApiResponse = {
      statusCode: 1,
      message: "Project created successfully",
    };
    return res.status(200).json({
      project: project,
      status:response
    });
  } catch (err) {
    next(err);
  }
};


export const getByIdProject = async (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    if(id){
      const project = await getByIdProjectService(id);
      return res.status(200).json({
        project: project,
      });
    }
    else{
      throw new Error("Project not found");
    }
  } catch (error) {
    next(error);
  }
};


export const UpdatePriority =  async (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const body:any = req.body;
    await updatePriorityService(body);
    const response: ApiResponse = {
      statusCode: 1,
      message: "task created successfully",
    };
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};