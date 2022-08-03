import React from "react";
import { Link } from "react-router-dom";
import bell from "../assets/icons/bell.svg";
import profilePic from "../assets/images/profilePic.png";
export const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between header-width items-center p-7">
      <div className="flex gap-x-5">
        <Link to="/createWorkshops">
          <button className="bg-blue text-white px-9 py-3 rounded-lg">
            Create WorkShop
          </button>
        </Link>
        <Link to="/createSCRIPTWorkshop">
          <button className="border-2 border-red-300 px-9 py-3 rounded-lg">
            Create Script Workshops
          </button>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="border-r pr-7 relative">
          <img className="w-7 h-7" src={bell} alt="bell" />
          <div className="absolute bg-orange-600 rounded-full w-5 h-5 text-xs text-white flex justify-center items-center left-2.5 -top-2.5">
            3
          </div>
        </div>
        <div className="flex pl-7 gap-x-2.5">
          <img className="w-11 h-11" src={profilePic} alt="Profile Pic" />
          <div className="flex flex-col">
            <h1>John Grey</h1>
            <div className="dropdown">
              <button
                className="inline-flex justify-center w-full text-sm leading-5  transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <span>SignOut</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  className="absolute right-0 w-40 rounded-lg mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  aria-labelledby="headlessui-menu-button-1"
                  id="headlessui-menu-items-117"
                  role="menu"
                >
                  <div className="px-4 py-3 flex gap-y-2 flex-col">
                    <Link to="/instructerProfile">
                      <p className="text-sm leading-5">My Profile</p>
                    </Link>
                    <p className="text-sm leading-5">LogOut</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
