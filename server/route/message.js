const messageController = require("../controller/messageController");
const middlewareController = require("../controller/middlewareController");

const messageRouter = require("express").Router();
messageRouter
  .route("/")
  .all(middlewareController.authorization)
  .post(messageController.createMessage)
  .get(messageController.getListMessage)
  .put(messageController.updateMessageStatus);
messageRouter.get("/test", messageController.test);

module.exports = messageRouter;
