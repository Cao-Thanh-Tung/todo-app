import { useDispatch, useSelector } from "react-redux";
import Avatar from "./avatar";

function Header({ signout }) {
  const user = useSelector((state) => state.user);
  return (
    <div className="h-fit p-2 px-2 flex justify-end bg-gray-700 box-border">
      <div className=" h-fit w-36 flex justify-between items-center mr-20">
        <i className="ti ti-announcement flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"></i>
        <Avatar user={user}></Avatar>
        <i
          className="ti ti-arrow-circle-right flex-shrink-0 text-xl w-6 h-6 text-orange-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
          onClick={signout}
        ></i>
      </div>
    </div>
  );
}

export default Header;
