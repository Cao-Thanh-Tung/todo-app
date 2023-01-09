const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getAllUser } = require("../Model/userInfo");
const userInfo = require("../Model/userInfo");
const { privateKey } = require("../variableEnv");
const middlewareController = {
  authenticate: async (req, res, next) => {
    const data = req.body;
    const user = await userInfo.findUserFromEmail(data.email);
    if (user && bcrypt.compareSync(data.password, user.password)) {
      delete user.password;
      req.user = user;
      return next();
    }
    res.status(401).send("Email or password is incorrect!");
  },

  authorization: async (req, res, next) => {
    const accessToken = req.body.accessToken;
    console.log(req.body);
    if (accessToken) {
      jwt.verify(accessToken, privateKey, function (err, decoded) {
        if (err) {
          return res.status(400).send(err.message);
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      return res.status(403).send("invalid access token");
    }
  },
  verifyAccessToken: async (req, res) => {
    const accessToken = req.body.accessToken;
    if (accessToken) {
      jwt.verify(accessToken, privateKey, function (err, decoded) {
        if (err) {
          console.log(err);
          return res.status(400).send(err.message);
        } else {
          res.status(200).send(decoded);
        }
      });
    } else {
      return res.status(403).send("invalid access token");
    }
  },
  test: (req, res, next) => {
    console.log(req.body);
    next();
  },
  test2: async (req, res) => {
    const listUsers = await getAllUser();
    return res.send(listUsers);
  },
};

module.exports = middlewareController;
