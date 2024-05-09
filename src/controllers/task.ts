import { ApiResponse, customRequest } from "customDefinition";
import { NextFunction, Response } from "express";
import { createTaskService, getTaskService } from "../services/taskService";


export const AddTask = async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const payload = req.body;
      const task = await createTaskService(payload);
      const response: ApiResponse = {
        statusCode: 1,
        message: "task created successfully",
      };
      return res.status(200).json({
        task: task,
        status:response
      });
    } catch (err) {
      next(err);
    }
  };


  export const GetTask = async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const sectionId = parseInt(req.params.sectionId);
      const tasks = await getTaskService(sectionId);
      return res.status(200).json({
        tasks: tasks,
      });
    } catch (err) {
      next(err);
    }
  };