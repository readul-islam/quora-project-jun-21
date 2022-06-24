import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
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
      <div className="navbar  max-w-7xl xl:max-w-full px-0 xl:px-10 mx-auto  ">
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
        <div className="navbar-end ">
          {!user ? (
            <Link to="/login">
              <PrimaryBtn>Sign UP</PrimaryBtn>{" "}
            </Link>
          ) : (
            <>
              <div className="flex items-center ">
                <div class="dropdown dropdown-end pr-2">
                  <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span class="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabindex="0"
                    class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div class="card-body">
                      <span class="font-bold text-lg">8 Items</span>
                      <span class="text-info">Subtotal: $999</span>
                      <div class="card-actions">
                        <button class="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                      <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                  </label>
                  <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li
                      onClick={() => {
                        signOut(auth);
                        navigate("/login");
                      }}
                    >
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
