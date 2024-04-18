import React from "react";
import list from "../../src/assets/list.json";
import Cards from "../../src/components/Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max w-screen 2xl container mx-auto md:px-20 px-4">
        <div className="pt-40 items-center justify-center text-center">
          <h1 className=" text-2xl font-semibold md:text-4xl">
            We are delight to have you
            <span className="text-fuchsia-400"> here.. :)</span>
          </h1>
          <p className="mt-12 text-xs md:text-base">
            Books substantially impact every person's life because they offer
            them access to a world of creativity, educate them about the outside
            world, improve their reading, writing, and speaking skills, and hone
            their intellect and memories. The importance of books in our life
            cannot be overstated since they give us a chance to learn new things
            and connect us to everyone else. Books also educate us as well as
            provide a wide range of information. They serve as survival kits,
            affect us, and influence us. It's accurate to claim that books are
            our real best friends. They are not only our friends but also our
            safe refuge. Books always ask us for something in return. Whenever
            exhausted, tired, or disturbed, picking up a novel and trying to
            read let us retreat to a new world free of issues and everyday
            tension.
          </p>
          <Link to="/">
            <button className=" btn mt-6 border-none text-base text-white bg-fuchsia-700 hover:bg-fuchsia-500 ">
              Back
            </button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 md:w-full">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
