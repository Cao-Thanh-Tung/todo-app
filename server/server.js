const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { PORT } = require("./variableEnv");
const rootRouter = require("./route");
const middlewareController = require("./controller/middlewareController");
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(middlewareController.test);
app.use("/v1", rootRouter);
app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
