const projectInfo = require("../Model/projectInfo");
const userInfo = require("../Model/userInfo");

const projectController = {
  createProject: async (req, res) => {
    const data = req.body;
    const project = {
      project_name: data.project_name,
      project_description: data.project_description,
    };
    const ownerId = req.user.user_id;
    const status = await projectInfo.addProject(project, ownerId);
    return res.send(status);
  },

  deleteProject: async (req, res) => {
    const data = req.body;
    const projectId = data.project_id;
    const status = await projectInfo.deleteProject(projectId);
    return res.send(status);
  },
  getProject: async (req, res) => {
    const data = req.body;
    const projectId = data.project_id;
    const project = await projectInfo.getProject(projectId);
    // Format return
    // project{
    //   project_id,
    //   project_name,
    //   project_description,
    //   project_status,
    //   owner_id,
    // }
    const owner_id = project.owner_id;
    const owner = await userInfo.findUserFromId(owner_id);
    const responseData = {
      ...project,
      ...owner,
    };
    return res.send(responseData);
  },
  updateProjectStatus: async (req, res) => {
    const data = req.body;
    const projectId = data.project_id;
    const newStatus = data.newStatus;
    const status = await projectInfo.setProjectStatus(projectId, newStatus);
    return res.send(status);
  },
  getListProject: async (req, res) => {
    const data = req.user;
    const userId = data.user_id;
    const listProject = await projectInfo.getListProject(userId);
    // format response: [{project_id, project_name}]
    return res.send(listProject);
  },
  getMyProject: async (req, res) => {
    const data = req.user;
    const userId = data.user_id;
    const listProject = await projectInfo.getMyProject(userId);
    return res.send(listProject);
  },
  test: async (req, res) => {
    const list = await projectInfo.test();
    return res.send(list);
  },
};

module.exports = projectController;
