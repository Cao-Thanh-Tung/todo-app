import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import authController from "../controller/authController";
import userController from "../controller/userController";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrChangeAccessToken,
  removeAccessToken,
} from "../redux/slide/accessTokenSlice";
function Signin() {
  let accessToken = useSelector((state) => state.accessToken.value);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const verifyJWT = async (accessToken) => {
      if (accessToken) {
        const { isLogin } = await authController.verifyAccessToken(accessToken);
        if (isLogin) {
          router.push("/home");
        } else {
          dispatch(removeAccessToken());
        }
      }
    };
    verifyJWT(accessToken);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [err, setErr] = useState({
    error: false,
    message: "",
  });
  const onSubmit = async (formData) => {
    let success = await userController.login(formData);
    if (success.error) {
      setErr(success);
    } else {
      dispatch(addOrChangeAccessToken({ accessToken: success.message }));
      router.push("/home");
    }
  };
  return (
    <div className="w-full max-w-xs mx-auto my-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-8 text-3xl text-center">Log in</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            {err.error && (
              <p className="text-red-500 text-xs italic">{err.message}</p>
            )}
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="example@gmail.com"
            {...register("email", {
              required: true,
              pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            })}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs italic">Please choose a email.</p>
        )}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              Please fill your password.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Sign In"
          />

          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div className="text-grey-dark mt-6 text-center">
        Create new account?
        <Link href="/signup">
          <a className="no-underline border-b border-blue text-blue-900">
            Sign up
          </a>
        </Link>
        .
      </div>
      <p></p>
    </div>
  );
}

export default Signin;
