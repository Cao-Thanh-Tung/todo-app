import { useDispatch, useSelector } from "react-redux";
import projectAPI from "../API/projectAPI";
import { setCurrentProjectId } from "../redux/slide/currentProjectIdSlice";
import { reLoadCurrentProjectInfo } from "../redux/slide/currentProjectInfoSlice";

function ProjectButton({ project_id, project_name }) {
  const accessToken = useSelector((state) => state.accessToken.value);
  const dispatch = useDispatch();
  const setCurrentProject = async () => {
    dispatch(setCurrentProjectId({ projectId: project_id }));
    const { project_description, leader } = await projectAPI.getProjectInfo(
      accessToken,
      project_id
    );
    dispatch(reLoadCurrentProjectInfo({ project_description, leader }));
  };
  return (
    <li
      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      onClick={setCurrentProject}
    >
      <i className="ti ti-folder w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
      <span className="ml-3">{project_name}</span>
    </li>
  );
}

export default ProjectButton;
