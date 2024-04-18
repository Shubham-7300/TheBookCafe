import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dmca() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="pt-40">
          <h1>Copyright Act 1957</h1>

          <p className="pt-10">
            A bill enacted in 1957 to protect copyright rights in India.
            <br />
            <br />
            The objective of the Indian Copyright Act 1957 was not to promote
            commercialism but to establish a proper balance in the interests of
            authors, publishers and consumers. To protect the rights of authors
            and publishers in this era of technological means like computers,
            internet etc., the Government of India decided to bring the
            Copyright Rights Amendment Bill 2010 to amend it.
            <br />
            <br /> It has been amended seven times so far in India (1957, 1983,
            1984, 1992, 1994, 2010 and 2012).
            <br />
            <br />
            According to Section 51, it is necessary to take permission.
            Infringement will be considered without conditions but the copyright
            owner must also have rights to the copy. This Act will not apply to
            newspapers
          </p>
        </div>
        <Link to="/">
          <button className=" btn mt-6 border-none text-base text-white bg-fuchsia-700 hover:bg-fuchsia-500 ">
            Back
          </button>
        </Link>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Dmca;
