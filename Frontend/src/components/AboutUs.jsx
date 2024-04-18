import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="pt-40 ">
          <p>
            One web page for every book ever published. It's a lofty but
            achievable goal. <br /> <br />
            To build The Book Cafe, we need hundreds of millions of book
            records, a wiki interface, and lots of people who are willing to
            contribute their time and effort to building the site. <br /> <br />
            To date, we have gathered over 20 million records from a variety of
            large catalogs as well as single contributions, with more on the
            way.
            <br /> <br />
            Open Library is an open project: the software/website is open, the
            data are open, the documentation is open, and we welcome your
            contribution. Whether you fix a typo, add a book, or write a
            widget--it's all welcome. We have a small team of fantastic
            programmers who have accomplished a lot, but we can't do it alone!
          </p>
          <br />
          <br />
          <h1 className="text-4xl text-fuchsia-700">Vision</h1> <br />
          <p>
            The ultimate goal of the The Book Cafe is to make all the published
            works of humankind available to everyone in the world. While large
            in scope and ambition, this goal is within our grasp. Achieving it
            will require the participation of librarians, authors, government
            officials and technologists.
            <br /> <br />
            Imagine what a comprehensive, The Book Cafe could be! A talented
            math whiz who lives in a rural community can explore the works of
            high math. An elderly person can have a large print edition of any
            book ever published. An innovative young scholar can publish a book
            directly to this great library on subjects that might not otherwise
            make it through the long and difficult publication process.
            <br /> <br />
            How can you help? Improve the records we have for the books you love
            – every record is fully editable by clicking the “edit” button on
            the page. If we don't have a record for a book, you can create one.
            If you're a library with digitized resources, tell us where they are
            and we'll point people to them.
            <br /> <br />
            Our hope is that libraries and individual book readers will join
            this project and together we can build towards universal access to
            all knowledge.
          </p>
          <Link to="/">
            <button className=" btn mt-6 border-none text-base text-white bg-fuchsia-700 hover:bg-fuchsia-500 ">
              Back
            </button>
          </Link>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
