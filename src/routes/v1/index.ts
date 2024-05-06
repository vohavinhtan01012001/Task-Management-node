import { Router } from "express";

import authRouter from "./authRoute";
import docsRouter from "./docsRoute";
import userRouter from "./userRoutes";
import projectRouter from "./projectRoute";

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
    path: "/project",
    router: projectRouter,
  },
  {
    path: "/docs",
    router: docsRouter,
  },
];

appRoutes.forEach(route => {
  appRouter.use(route.path, route.router);
});

export default appRouter;
