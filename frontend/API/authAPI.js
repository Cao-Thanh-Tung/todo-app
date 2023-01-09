import serverConnect from "./connectServer";
const authAPI = {
  verifyAccessToken: async (AccessToken) => {
    const data = {
      accessToken: AccessToken,
    };
    const user = await serverConnect.post("/user/verify", data);
    return user;
  },
};

export default authAPI;
