import { NextFunction, Response } from "express";
import { ApiResponse, customRequest } from "../types/customDefinition";
import { createCommentService, getCommentAllService } from "../services/commentService";


export const GetComments = async (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = parseInt(req.params.id);
    const comments = await getCommentAllService(taskId);
    return res.status(200).json({
      comments: comments,
    });
  } catch (err) {
    next(err);
  }
};

export const AddComment = async (
    req: customRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const body = req.body;
      const comments = await createCommentService(body);
      return res.status(200).json({
        comments: comments,
      });
    } catch (err) {
      next(err);
    }
  };