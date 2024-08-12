import { Router } from "express";

import authRouter from "./authRoute";
import docsRouter from "./docsRoute";
import userRouter from "./userRoutes";
import projectRouter from "./projectRoute";
import sectionRouter from "./sectionRoute";
import taskRouter from "./taskRoute";
import commentRoute from "./commentRoute";

const appRouter = Router();

// all routes
const appRoutes = [
  {
    path: "/authorization",
    router: authRouter,
  },
  {
    path: "/user",
    router: userRouter,
  },
  {
    path: "/docs",
    router: docsRouter,
  },
  {
    path: "/project",
    router: projectRouter,
  },
  {
    path: "/section",
    router: sectionRouter,
  },
  {
    path: "/task",
    router: taskRouter,
  }, 
  {
    path: "/comment",
    router: commentRoute,
  },
];

appRoutes.forEach(route => {
  appRouter.use(route.path, route.router);
});

export default appRouter;
