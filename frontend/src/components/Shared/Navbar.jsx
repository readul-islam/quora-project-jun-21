import React from "react";
import { Link, NavLink } from "react-router-dom";

import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
  const menus = (
    <>
      <li className="md:mx-1">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="md:mx-1">
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li className="md:mx-1">
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li className="md:mx-1">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="  bg-gradient-to-tr from-neutral to-accent ">
      <div className="navbar  max-w-7xl mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>
          <Link
            to="/home"
            className=" normal-case text-xl md:text-3xl font-bold"
          >
            Qu<span className="text-primary">ora</span>.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menus}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/Sign-up">
            <PrimaryBtn>Sign UP</PrimaryBtn>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
