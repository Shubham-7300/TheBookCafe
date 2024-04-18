import React from "react";
import "./App.css";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Dmca from "./components/Dmca";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/DMCA" element={<Dmca />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
