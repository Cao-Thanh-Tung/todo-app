const db = require("./connectDB");

const projectInfo = {
  // CREATE TABLE IF NOT EXISTS public.project (
  //   project_id SERIAL PRIMARY KEY,
  //   owner_id int not null,
  //   project_name varchar(50) not null,
  //   project_description varchar(1000),
  //   project_status int default 1,
  //   FOREIGN KEY (owner_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
  // );
  addProject: async (project, ownerId) => {
    const status = await db.none(
      "INSERT INTO public.project(owner_id, project_name, project_description) VALUES(${ownerId}, ${project_name}, ${project_description})",
      {
        ...project,
        ownerId,
      }
    );
    return !status;
  },
  deleteProject: async (projectId) => {
    const status = await db.none(
      "DELETE FROM public.project WHERE project_id = ${projectId}",
      {
        projectId,
      }
    );
    return !status;
  },
  setProjectStatus: async (projectId, newStatus) => {
    const status = await db.none(
      "UPDATE public.project SET project_status = ${newStatus} WHERE project_id = ${projectId}",
      {
        projectId,
        newStatus,
      }
    );
    return !status;
  },
  getListProject: async (userId) => {
    const listProject = await db.manyOrNone(
      "SELECT a.project_id, a.project_name FROM public.project as a INNER JOIN public.user_in_project as b on a.project_id = b.project_id WHERE b.user_id = ${userId}",
      {
        userId,
      }
    );
    return listProject;
  },
  getMyProject: async (userId) => {
    const listProject = await db.manyOrNone(
      "SELECT project_id, project_name FROM public.project where owner_id = ${userId}",
      {
        userId,
      }
    );
    return listProject;
  },
  getProject: async (projectId) => {
    const project = await db.oneOrNone(
      "SELECT  * FROM public.project WHERE project_id = ${projectId}",
      {
        projectId,
      }
    );
    return project;
  },

  test: async () => {
    const listProject = await db.query("SELECT * FROM public.project");
    return listProject;
  },
};
module.exports = projectInfo;
