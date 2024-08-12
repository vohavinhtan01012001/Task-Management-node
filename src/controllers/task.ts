import { ApiResponse, customRequest } from "customDefinition";
import { NextFunction, Response } from "express";
import { createSubTaskService, createTaskService, getSubTaskService, getTaskService, updatePriorityService, updateStatusService, UpdateTaskMoveToSectionService, updateTaskService } from "../services/taskService";


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

  export const AddSubTask = async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const payload = req.body;
      const id = parseInt(req.params.id);
      const task = await createSubTaskService(id,payload);
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


  export const GetSubTask = async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = parseInt(req.params.id);
      const tasks = await getSubTaskService(id);
      return res.status(200).json({
        tasks: tasks,
      });
    } catch (err) {
      next(err);
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

  export const UpdateStatus =  async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = parseInt(req.params.id, 10);
      await updateStatusService(id);
      const response: ApiResponse = {
        statusCode: 1,
        message: "task update successfully",
      };
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };


  export const UpdateTask =  async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = parseInt(req.params.id, 10);
      const body = req.body;
      const task = await updateTaskService(id,body);
      const response: ApiResponse = {
        statusCode: 1,
        message: "task update successfully",
      };
      return res.status(200).json({status:response, task:task});
    } catch (error) {
      next(error);
    }
  };

  export const UpdateTaskMoveToSection =  async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const sectionId = req.body.sectionId;
      const id= parseInt(req.params.id);
      const task = await UpdateTaskMoveToSectionService(id,sectionId);
      const response: ApiResponse = {
        statusCode: 1,
        message: "task update successfully",
      };
      return res.status(200).json({status:response, task:task});
    } catch (error) {
      next(error);
    }
  };