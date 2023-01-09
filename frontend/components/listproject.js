import ProjectButton from "./projectbutton";

function ListProject({ listProjectInfo }) {
  console.log(listProjectInfo);
  return (
    <div className="overflow-y-auto px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
        {listProjectInfo.map((projectInfo) => (
          <ProjectButton
            project_id={projectInfo.project_id}
            project_name={projectInfo.project_name}
          ></ProjectButton>
        ))}
      </ul>
    </div>
  );
}

export default ListProject;
