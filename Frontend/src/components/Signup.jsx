import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className=" flex h-screen items-center justify-center">
        <div className="w-[600px] ps-10 ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2
                top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4 spacing space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className=" w-full px-4 py-2 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 spacing space-y-2">
                <span>
                  Email<span className="text-fuchsia-400">*</span>
                </span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
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
              <div className="mt-4 spacing space-y-2">
                <span>
                  Password<span className="text-fuchsia-400">*</span>
                </span>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className=" w-full px-4 py-2 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex  justify-between">
                <button className=" btn mt-5  border-none text-white bg-fuchsia-700 hover:bg-fuchsia-500 ">
                  Sign up
                </button>
                <h4 className="pt-8">
                  Have Account?
                  <button
                    className="cursor-pointer underline text-fuchsia-400"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
