import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { AddSubTask, AddTask, GetSubTask, GetTask, UpdatePriority, UpdateStatus, UpdateTask, UpdateTaskMoveToSection } from "../../controllers/task";
import { taskCreate } from "../../validation/task";


const taskRouter = Router();
taskRouter.post("/add-task",requireUser,validateRequest(taskCreate), AddTask);
taskRouter.post("/add-subTask/:id",requireUser,validateRequest(taskCreate), AddSubTask);
taskRouter.get("/get-task/:sectionId",requireUser, GetTask);
taskRouter.get("/get-subTask/:id",requireUser, GetSubTask);
taskRouter.put("/update-priority",requireUser,UpdatePriority);
taskRouter.get("/update-status/:id",requireUser,UpdateStatus);
taskRouter.patch("/update/:id",requireUser,UpdateTask);
taskRouter.patch("/move-task/:id",requireUser,UpdateTaskMoveToSection);
export default taskRouter;


/**
 * @swagger
 * tags:
 *   name: Task
 *   description: Operations related to tasks
 */

/**
 * @swagger
 * /v1/task/add-task:
 *   post:
 *     summary: Add a new task
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []  # Yêu cầu xác thực JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               favorite:
 *                 type: number
 *               color:
 *                 type: string
 *               userId:
 *                 type: number
 *               priority:
 *                 type: number
 *               subTaskId:
 *                 type: number
 *               projectId:
 *                 type: number
 *               sectionId:
 *                 type: number
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized - Không có quyền truy cập
 *       '400':
 *         description: Bad Request
 */
