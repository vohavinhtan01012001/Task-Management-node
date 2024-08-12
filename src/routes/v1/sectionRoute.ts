import { Router } from "express";
import { AddSection, CopySection, DeleteSection, getSections, UpdatePriority, UpdateSection } from "../../controllers/section";
import { section, sectionUpdate } from "../../validation/section";
import { validateRequest } from "../../middleware";
import { requireUser } from "../../middleware";

const sectionRouter = Router();

sectionRouter.get("/:projectId", requireUser,getSections);
sectionRouter.post("/add-section",requireUser,validateRequest(section), AddSection);
sectionRouter.put("/update-priority",requireUser,UpdatePriority);
sectionRouter.put("/update-section/:id",requireUser,validateRequest(sectionUpdate),UpdateSection);
sectionRouter.delete("/delete/:id",requireUser,DeleteSection);
sectionRouter.get("/copy/:id",requireUser,CopySection);
export default sectionRouter;

/**
 * @swagger
 * tags:
 *   name: Section
 *   description: Operations related to sections
 */

/**
 * @swagger
 * /v1/section/{projectId}:
 *   get:
 *     summary: Get sections by project ID
 *     tags: [Section]
 *     security:
 *       - bearerAuth: []  # Yêu cầu xác thực JWT
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the project to get sections for
 *     responses:
 *       "200":
 *         description: OK
 */

