import { ApiResponse, customRequest } from "customDefinition";
import { NextFunction, Response } from "express";
import { createSectionService, getSectionAll } from "../services/sectionService";


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