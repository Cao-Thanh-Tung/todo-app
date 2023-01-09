import serverConnect from "./connectServer";

const projectAPI = {
  getMyProject: async (accessToken) => {
    console.log("aaa", accessToken);
    const list = await serverConnect.get("/project/myproject", {
      accessToken,
    });

    return list;
  },
  getOtherProject: async (accessToken) => {
    const list = await serverConnect.get("/project/list", {
      accessToken,
    });
    return list;
  },
  getProjectInfo: async (accessToken, project_id) => {
    const projectInfo = await serverConnect.get("/project", {
      project_id,
      accessToken,
    });
    return (info = {
      project_status: projectInfo.project_status,
      project_description: projectInfo.project_description,
      leader: {
        id: projectInfo.user_id,
        email: projectInfo.email,
        fullname: projectInfo.fullname,
        avatar: projectInfo.avatar,
      },
    });
  },
};

export default projectAPI;
