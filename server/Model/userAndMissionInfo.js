const db = require("./connectDB");

const userAndMissionInfo = {
  // CREATE TABLE IF NOT EXISTS public.user_in_mission(
  //   id SERIAL PRIMARY KEY,
  //   user_id int not null,
  //   mission_id int not null,
  //   FOREIGN KEY (user_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  //   FOREIGN KEY (mission_id) REFERENCES public.mission(mission_id) ON DELETE CASCADE ON UPDATE CASCADE
  // );

  addUserToMission: async (user_id, mission_id) => {
    const status = await db.none(
      "INSERT INTO public.user_in_mission(user_id, mission_id) VALUES(${user_id}, ${mission_id})",
      {
        user_id,
        mission_id,
      }
    );
    return !status;
  },
  deleteUserFromMission: async (user_id, mission_id) => {
    const status = await db.none(
      "DELETE FROM public.user_in_mission WHERE user_id = ${user_id} AND mission_id = ${mission_id}",
      {
        user_id,
        mission_id,
      }
    );
    return !status;
  },
  getAllUserInMission: async (mission_id) => {
    const listUser = await db.manyOrNone(
      "SELECT a.fullname, a.avatar, a.user_id FROM public.user AS a INNER JOIN public.user_in_mission AS b ON a.user_id = b.user_id WHERE b.mission_id = ${mission_id}",
      {
        mission_id,
      }
    );
    return listUser;
  },
  checkUserInMission: async (user_id, mission_id) => {
    const result = await db.manyOrNone(
      "SELECT * FROM public.user_in_mission WHERE user_id = ${user_id} AND mission_id = ${mission_id}",
      {
        user_id,
        mission_id,
      }
    );
    if (result.length != 0) {
      return true;
    } else {
      return false;
    }
  },
};
module.exports = userAndMissionInfo;
