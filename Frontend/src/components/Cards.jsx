import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 hover:bg-white hover:text-black  bg-base-200 hover:scale-105 duration-200 shadow-xl dark:bg-slate-900 dark:text-white  hover:dark:bg-white hover:dark:text-black">
          <figure>
            <img src={item.image} alt="Item Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline p-3 hover:bg-fuchsia-700 hover:text-white hover:px-4 hover:py-4 duration-200">
                ₹ {item.price}
              </div>
              <div className="badge badge-outline p-3 hover:bg-fuchsia-700 hover:text-white hover:px-4 hover:py-4 duration-200 ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
