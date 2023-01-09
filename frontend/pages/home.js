import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authController from "../controller/authController";
import { removeAccessToken } from "../redux/slide/accessTokenSlice";
import Header from "../components/header";
import { setUser } from "../redux/slide/userSlice";
import SideBar from "../components/sidebar";

function Home() {
  let accessToken = useSelector((state) => state.accessToken.value);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const verifyJWT = async (accessToken) => {
      if (accessToken) {
        const { isSuccess, user } = await authController.verifyAccessToken(
          accessToken
        );
        if (!isSuccess) {
          dispatch(removeAccessToken());
          router.push("/signin");
        } else {
          dispatch(setUser(user));
        }
      } else {
        router.push("/signin");
      }
    };
    verifyJWT(accessToken);
  }, []);
  const clickHandle = (data) => {
    dispatch(removeAccessToken());
    router.push("/signin");
  };

  return (
    <div>
      <Header signout={clickHandle}></Header>
      <SideBar></SideBar>
    </div>
  );
}

export default Home;
