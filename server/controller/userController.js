const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userInfo = require("../Model/userInfo");
const { privateKey } = require("../variableEnv");
const userController = {
  register: async (req, res) => {
    const data = req.body;
    const user = await userInfo.findUserFromEmail(data.email);
    if (user) {
      return res.status(400).send("Email was used!");
    }
    const hash = await bcrypt.hash(data.password, 10);
    userInfo.insertUser({ ...data, password: hash });
    res.status(200).send("Register Success!");
  },

  login: async (req, res) => {
    let data = req.user;
    delete data.password;
    if (data) {
      const accessToken = jwt.sign(data, privateKey, { expiresIn: "1h" });
      return res.status(200).send({ accessToken: accessToken });
    }
    res.status(401).send("Email or password is incorrect");
  },
  logout: async (req, res) => {
    const data = req.user;
    res.json(data);
  },
  changeInfo: async (req, res) => {
    const jwtData = req.user;
    const user = await userInfo.findUserFromId(jwtData.user_id);
    const data = req.body;
    if (bcrypt.compareSync(data.password, user.password)) {
      data.user_id = user.user_id;
      data.password = await bcrypt.hash(data.new_password, 10);
      await userInfo.updateUserInfo(data);
      const dataNew = await userInfo.findUserFromId(jwtData.user_id);
      delete dataNew.password;
      const accessToken = jwt.sign(data, privateKey, { expiresIn: "1h" });
      dataNew.accessToken = accessToken;
      return res.json(dataNew);
    } else {
      return res.status(401).send("unauthorized");
    }
  },
  deleteUser: async (req, res) => {
    const data = req.user;
    try {
      await userInfo.deleteUser(data.email);
    } catch (err) {
      return res.status(500).send(err);
    }
    res.status(200).send("delete user success!");
  },
};

module.exports = userController;
