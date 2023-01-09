import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import userController from "../controller/userController";
function SignUp() {
  const router = useRouter();
  const [err, setErr] = useState({
    error: false,
    message: "",
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (newUserInfo) => {
    let success = await userController.register(newUserInfo);
    if (success.error) {
      setErr(success);
    } else {
      router.push("/signin");
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          {err.error && (
            <p className="text-red-500 text-xs italic mb-5">{err.message}</p>
          )}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            {...register("fullname", {
              required: true,
            })}
          />
          {errors.fullname && (
            <p className="text-red-500 text-xs italic mb-5">
              Please choose a fullname.
            </p>
          )}

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              Please fill your email.
            </p>
          )}

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i,
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              Please choose a password. Password must be at least 8 characters
              with at least 1 alphabet, 1 number, 1 special character, 1
              uppercase letter, 1 lowercase letter
            </p>
          )}

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            {...register("confirm_password", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-xs italic">
              confirm password is uncorrect.
            </p>
          )}

          <button
            type="submit"
            className="w-full text-center bg-blue-600 py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </form>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link href="/signin">
            <a className="no-underline border-b border-blue text-blue-900">
              Log in
            </a>
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
