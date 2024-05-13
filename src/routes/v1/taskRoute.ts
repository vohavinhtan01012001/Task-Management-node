import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { AddTask, GetTask, UpdatePriority } from "../../controllers/task";
import { taskCreate } from "../../validation/task";


const taskRouter = Router();
taskRouter.post("/add-task",requireUser,validateRequest(taskCreate), AddTask);
taskRouter.get("/get-task/:sectionId",requireUser, GetTask);
taskRouter.put("/update-priority",UpdatePriority);
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
