const db = require("./connectDB");

const missionInfo = {
  // CREATE TABLE IF NOT EXISTS public.mission (
  //   mission_id SERIAL PRIMARY KEY,
  //   user_create_id int not null,
  //   mission_title varchar(100) not null,
  //   mission_description varchar(1000) not null,
  //   project_id int not null,
  //   mission_status int default 1,
  //   FOREIGN KEY (user_create_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  //   FOREIGN KEY (project_id) REFERENCES public.project(project_id) ON DELETE CASCADE ON UPDATE CASCADE
  // );

  addMission: async (mission, user_create_id) => {
    const status = await db.none(
      "INSERT INTO public.mission(mission_title, mission_description, project_id, user_create_id) VALUES(${mission_title}, ${mission_description}, ${project_id}, ${user_create_id})",
      {
        ...mission,
        user_create_id,
      }
    );
    return !status;
  },
  deleteMission: async (missionId) => {
    const status = await db.none(
      "DELETE FROM public.mission WHERE mission_id = ${missionId}",
      {
        missionId,
      }
    );
    return !status;
  },
  updateMissionStatus: async (missionId, newStatus) => {
    const status = await db.none(
      "UPDATE public.mission SET mission_status = ${newStatus} WHERE mission_id = ${missionId}",
      {
        missionId,
        newStatus,
      }
    );
    return !status;
  },
  getListMission: async (projectId) => {
    const listMission = await db.manyOrNone(
      "SELECT (mission_title, mission_id, mission_status) FROM public.mission WHERE project_id = ${projectId}",
      {
        projectId,
      }
    );
    return listMission;
  },
  getMission: async (missionId) => {
    const mission = await db.oneOrNone(
      "SELECT (mission_id, mission_title, mission_description, mission_status FROM public.mission WHERE mission_id = ${misisonId}",
      {
        missionId,
      }
    );
    return mission;
  },
  test: async () => {
    const listMission = await db.query("SELECT * FROM public.mission");
    return listMission;
  },
};

module.exports = missionInfo;
