import serverConnect from "./connectServer";
const userAPI = {
  register: async (user) => {
    const data = await serverConnect.post("/user", user);
    return data;
  },
  login: async (user) => {
    const data = await serverConnect.post("/user/login", user);
    return data;
  },
  changeInfo: async (jwtAccessToken) => {
    const data = await serverConnect.put("/user", jwtAccessToken);
    return data;
  },
  deleteUser: async (jwtAccessToken) => {
    const data = await serverConnect.delete("/user", jwtAccessToken);
    return data;
  },
  logout: async (jwtAccessToken) => {
    const data = null;
    return null;
  },
};

export default userAPI;
