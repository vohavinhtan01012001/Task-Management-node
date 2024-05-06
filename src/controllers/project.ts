import { NextFunction, Response } from "express";
import { ApiResponse, customRequest } from "../types/customDefinition";
import { createProject, getProjectAll } from "../services/projectService";


export const getProjects = async (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const projects = await getProjectAll();
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

