import { Router } from "express";
import { AddProject, getProjects } from "../../controllers/project";
import { validateRequest } from "../../middleware";
import { project } from "../../validation/project";

const projectRouter = Router();

projectRouter.get("/", getProjects);
projectRouter.post("/add-project",validateRequest(project), AddProject);

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

