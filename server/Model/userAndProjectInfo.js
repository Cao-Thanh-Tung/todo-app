const db = require("./connectDB");

const userAndProjectInfo = {
  // CREATE TABLE IF NOT EXISTS public.user_in_project(
  //   id SERIAL PRIMARY KEY,
  //   user_id int not null,
  //   project_id int not null,
  //   FOREIGN KEY (user_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  //   FOREIGN KEY (project_id) REFERENCES public.project(project_id) ON DELETE CASCADE ON UPDATE CASCADE
  // );

  addUserToProject: async (user_id, project_id) => {
    const status = await db.none(
      "INSERT INTO public.user_in_project(user_id, project_id) VALUES(${user_id}, ${project_id})",
      {
        user_id,
        project_id,
      }
    );
    return !status;
  },
  deleteUsetFromProject: async (user_id, project_id) => {
    const status = await db.none(
      "DELETE FROM public.user_in_project WHERE user_id = ${user_id} AND project_id = ${project_id}",
      {
        user_id,
        project_id,
      }
    );
    return !status;
  },
  getUserInProject: async (project_id) => {
    const listUser = await db.manyOrNone(
      "SELECT a.fullname, a.avatar, a.user_id FROM public.user AS a INNER JOIN public.user_in_project AS b ON a.user_id = b.user_id WHERE b.project_id = ${project_id}",
      {
        project_id,
      }
    );
    return listUser;
  },
  checkUserInProject: async (user_id, project_id) => {
    const result = await db.manyOrNone(
      "SELECT * FROM public.user_in_project WHERE user_id = ${user_id} AND project_id = ${project_id}",
      {
        user_id,
        project_id,
      }
    );
    if (result.length != 0) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = userAndProjectInfo;
