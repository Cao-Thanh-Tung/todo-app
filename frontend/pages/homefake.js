import Header from "../components/header";
import DashBoard from "../components/dashboard";
import SideBar from "../components/sidebar";
import Project from "../components/project";
function HomeFake() {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-between w-auto">
        <SideBar></SideBar>
        <Project></Project>
        <DashBoard></DashBoard>
      </div>
    </div>
  );
}

export default HomeFake;
