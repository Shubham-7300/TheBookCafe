import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="mt-2">
          <h1 className=" pt-40 text-4xl text-fuchsia-500">Contact Sales</h1>
          <p className="mt-5">
            If you want to use The Book Cafe services as an educational
            institution, team or enterprise, send us an e-mail:
            sales@thebookcafe.com
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-4xl text-fuchsia-500">Report Error</h1>
          <p className="mt-5">
            If you want to report an error, or if you want to make a suggestion,
            send us an e-mail: help@thebookcafe.com
          </p>
        </div>
        <Link to="/">
          <button className=" btn mt-6 border-none text-base text-white bg-fuchsia-700 hover:bg-fuchsia-500 ">
            Back
          </button>
        </Link>
        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
