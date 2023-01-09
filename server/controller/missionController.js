const missionInfo = require("../Model/missionInfo");

// CREATE TABLE IF NOT EXISTS public.mission (
// 	mission_id SERIAL PRIMARY KEY,
// 	user_create_id int not null,
//  mission_title varchar(100) not null,
// 	mission_description varchar(1000) not null,
// 	project_id int not null,
// 	mission_status int default 1,
// 	CONSTRAINT fk_user_create
// 	FOREIGN KEY (user_create_id)
// 	REFERENCES public.user(user_id),
// 	CONSTRAINT fk_project
// 	FOREIGN KEY (project_id)
// 	REFERENCES public.project(project_id)
// );

const missionController = {
  createMission: async (req, res) => {
    const data = req.body;
    const userCreateId = req.user.user_id;
    const mission = {
      mission_title: data.mission_title,
      mission_description: data.mission_description,
      project_id: data.project_id,
    };
    const status = await missionInfo.addMission(mission, userCreateId);
    return res.send(status);
  },
  deleteMission: async (req, res) => {
    const data = req.body;
    const mission_id = data.mission_id;
    const status = await missionInfo.deleteMission(mission_id);
    return res.send(status);
  },
  getMission: async (req, res) => {
    const data = req.body;
    const missionId = data.mission_id;
    const mission_info = await missionInfo.getMission(missionId);
    const { mission_id, mission_tittle, mission_description, mission_status } =
      mission_info;
    const mission = {
      mission_id,
      mission_tittle,
      mission_description,
      mission_status,
    };
    return res.send(mission);
  },
  updateMissionStatus: async (req, res) => {
    const data = req.body;
    const missionId = data.mission_id;
    const newStatus = data.newStatus;
    const status = await missionInfo.updateMissionStatus(missionId, newStatus);
    return res.send(status);
  },
  getListMission: async (req, res) => {
    const projectId = req.body.project_id;
    const listMission = await missionInfo.getListMission(projectId);
    return res.send(listMission);
  },
  test: async (req, res) => {
    const list = await missionInfo.test();
    return res.send(list);
  },
};
module.exports = missionController;
