import React from "react";
import image from "../assets/book2.jpg";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn without limit
              <span className="text-fuchsia-400">
                {" "}
                any time, any where..!!!
              </span>
            </h1>
            <p className="text-xl">
              "Start, switch, or advance your knowledge with 700+ books written
              by world-class writers and available on top sellers..!!"
            </p>
            <label className="input input-bordered flex items-center gap-2 border-fuchsia-400 dark:bg-slate-900 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow " placeholder="Email" />
            </label>
          </div>
          <button className=" btn mt-6 border-none text-white bg-fuchsia-700 hover:bg-fuchsia-500 ">
            Send
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1 py-20">
          <img
            src={image}
            className=" w-80 h-80 md:mx-40 md:my-20 rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
