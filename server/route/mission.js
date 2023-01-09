const middlewareController = require("../controller/middlewareController");
const missionController = require("../controller/missionController");
const missionRouter = require("express").Router();
missionRouter
  .route("/")
  .all(middlewareController.authorization)
  .post(missionController.createMission)
  .get(missionController.getMission)
  .put(missionController.updateMissionStatus)
  .delete(missionController.deleteMission);
missionRouter.get(
  "/list",
  middlewareController.authorization,
  missionController.getListMission
);
missionRouter.get("/test", missionController.test);

module.exports = missionRouter;
