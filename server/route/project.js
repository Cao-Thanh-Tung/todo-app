const middlewareController = require("../controller/middlewareController");
const projectController = require("../controller/projectController");
const projectRouter = require("express").Router();
projectRouter
  .route("/")
  .all(middlewareController.authorization)
  .post(projectController.createProject)
  .get(projectController.getProject)
  .put(projectController.updateProjectStatus)
  .delete(projectController.deleteProject);
projectRouter.get(
  "/list",
  middlewareController.authorization,
  projectController.getListProject
);
projectRouter.get(
  "/myproject",
  middlewareController.authorization,
  projectController.getMyProject
);
projectRouter.get("/test", projectController.test);
module.exports = projectRouter;
