import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import projectAPI from "../API/projectAPI";
import ListProject from "./listProject";
import { reLoadMyListProject } from "../redux/slide/myListProjectSlice";
import { reLoadListOtherProject } from "../redux/slide/listOtherProjectSlice";
function SideBar() {
  let accessToken = useSelector((state) => state.accessToken.value);
  let myListProject = useSelector((state) => state.myListProject.value);
  let OtherProject = useSelector((state) => state.listOtherProject.value);

  const dispatch = useDispatch();
  useEffect(() => {
    const getListProject = async () => {
      const myproject = await projectAPI.getMyProject(accessToken);
      const listproject = await projectAPI.getOtherProject(accessToken);
      dispatch(reLoadMyListProject(myproject));
      dispatch(reLoadListOtherProject(listproject));
    };
    getListProject();
  }, []);
  myListProject = [
    { project_id: 1, project_name: "NextJs learn" },
    { project_id: 2, project_name: "NuxtJs learn" },
  ];
  OtherProject = [
    { project_id: 1, project_name: "Create ExpressJs app" },
    { project_id: 2, project_name: "English App" },
  ];

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <i className="ti ti-user w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span className="ml-3">My Project</span>
          </li>
          <ListProject listProjectInfo={myListProject}></ListProject>
          <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <i className="ti ti-rocket w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span className="ml-3">Other Project</span>
          </li>
          <ListProject listProjectInfo={OtherProject}></ListProject>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
