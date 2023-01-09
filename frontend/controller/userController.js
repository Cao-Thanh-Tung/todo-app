import { setCookie } from "cookies-next";
import userAPI from "../API/userAPI";
const userController = {
  login: async (data) => {
    let responseMessage;
    try {
      responseMessage = await userAPI.login(data);
      return {
        error: false,
        message: responseMessage.data.accessToken,
      };
    } catch (err) {
      return {
        error: true,
        message: err.response.data,
      };
    }
  },
  register: async (newUserInfo) => {
    try {
      const message = await userAPI.register(newUserInfo);
      return {
        error: false,
        message: "",
      };
    } catch (err) {
      return {
        error: true,
        message: err.response.data,
      };
    }
  },

  deleteUser: (data) => {},
  updateInfoUser: (data) => {},
  logout: (data) => {},
  getUser: async (accessToken) => {
    const user = await userAPI.getUser(accessToken);
    return user;
  },
};

export default userController;
