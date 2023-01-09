const userController = require("../controller/userController");
const middlewareController = require("../controller/middlewareController");
const userRouter = require("express").Router();
userRouter
  .route("/")
  .post(userController.register)
  .put(middlewareController.authorization, userController.changeInfo)
  .delete(middlewareController.authorization, userController.deleteUser);

userRouter.post(
  "/login",
  middlewareController.authenticate,
  userController.login
);

userRouter.post("/verify", middlewareController.verifyAccessToken);

userRouter.get("/test", middlewareController.test2);

module.exports = userRouter;
