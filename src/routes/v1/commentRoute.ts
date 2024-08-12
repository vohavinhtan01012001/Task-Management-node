import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { AddComment, GetComments } from "../../controllers/comment";
import { comment } from "../../validation/comment";

const commentRoute = Router();
commentRoute.get("/get-comment/:id", requireUser,GetComments);
commentRoute.post("/add-comment", requireUser,validateRequest(comment),AddComment);
export default commentRoute;