import { Router } from "express";
import { AddProject, getByIdProject, getProjects,UpdatePriority } from "../../controllers/project";
import { requireUser, validateRequest } from "../../middleware";
import { project } from "../../validation/project";

const projectRouter = Router();
projectRouter.get("/", requireUser,getProjects);
projectRouter.post("/add-project",requireUser,validateRequest(project), AddProject);
projectRouter.get("/get-project/:id",requireUser, getByIdProject);
projectRouter.put("/update-priority",UpdatePriority);

export default projectRouter;

/**
 * @swagger
 * tags:
 *   name: Project
 *   description: Project
 */

/**
 * @swagger
 * /v1/project:
 *   get:
 *     summary: Get projects
 *     tags: [Project]
 *     responses:
 *       "200":
 *         description: OK
 */


/**
 * @swagger
 * /v1/project/add-project:
 *   post:
 *     summary: Create Project
 *     description: Logged-in users can only add their own information.
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []  # Yêu cầu xác thực JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - favorite
 *               - color
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               favorite:
 *                 type: integer
 *                 enum: [0, 1]
 *               color:
 *                 type: string
 *             example:
 *               title: "Your Title"
 *               description: "Your Description"
 *               favorite: 0
 *               color: "#333"
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad Request
 */


/**
 * @swagger
 * /v1/project/get-project/{id}:
 *   get:
 *     summary: Get project by ID
 *     description: Get a project by its ID
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []  # Yêu cầu xác thực JWT
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project to get
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Not Found
 */
