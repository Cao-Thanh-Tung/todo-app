import { getCookie, hasCookie, deleteCookie } from "cookies-next";
import authAPI from "../API/authAPI";

const authController = {
  authorization: async () => {},
  verifyAccessToken: async (accessToken) => {
    let isSuccess = false;
    let message;
    try {
      message = await authAPI.verifyAccessToken(accessToken);
      if (message.status === 200) {
        isSuccess = true;
      }
    } catch (err) {
      console.log("err emit!");
    }
    return { isSuccess, user: message.data };
  },
};

export default authController;
