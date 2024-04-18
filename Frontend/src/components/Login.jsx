import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              {/* email  */}
              <div className="mt-4  space-y-2">
                <span>
                  Email<span className="text-fuchsia-400">*</span>
                </span>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* password */}
              <div className="mt-4  space-y-2">
                <span>
                  Password<span className="text-fuchsia-400">*</span>
                </span>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className=" w-full px-4 py-2 border rounded-md outline-none "
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* button */}
              <div className="flex  justify-between">
                <button className=" btn mt-5  border-none text-white bg-fuchsia-700 hover:bg-fuchsia-500 duration-200 ">
                  Login
                </button>
                <h4 className="pt-8 ">
                  Not registered?{" "}
                  <a
                    href="/signUp"
                    className="cursor-pointer underline text-fuchsia-400"
                  >
                    Signup
                  </a>
                </h4>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
