import { ApiResponse, customRequest } from "customDefinition";
import { NextFunction, Response } from "express";
import { copySectionService, createSectionService, deleteSectionService, getSectionAll, updatePriorityService, updateSectionService } from "../services/sectionService";


export const getSections = async (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectId = parseInt(req.params.projectId);
    const sections = await getSectionAll(projectId);
    return res.status(200).json({
      sections: sections,
    });
  } catch (err) {
    next(err);
  }
};


export const AddSection = async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const payload = req.body;
      const section = await createSectionService(payload);
      const response: ApiResponse = {
        statusCode: 1,
        message: "Section created successfully",
      };
      return res.status(200).json({
        section: section,
        status:response
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
        message: "section created successfully",
      };
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  export const UpdateSection =  async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const body:any = req.body;
      const id = req.params.id;
      const idToInt = parseInt(id, 10);
      await updateSectionService(idToInt,body);
      const response: ApiResponse = {
        statusCode: 1,
        message: "section update successfully",
      };
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };


  export const DeleteSection =  async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const idToInt = parseInt(id, 10);
      await deleteSectionService(idToInt);
      const response: ApiResponse = {
        statusCode: 1,
        message: "section delete successfully",
      };
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  export const CopySection =  async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const idToInt = parseInt(id, 10);
      await copySectionService(idToInt);
      const response: ApiResponse = {
        statusCode: 1,
        message: "section copy successfully",
      };
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };