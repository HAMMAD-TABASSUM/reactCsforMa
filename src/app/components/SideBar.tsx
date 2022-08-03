import React from "react";
import subLogo from "../assets/icons/subLogo.svg";
import dashboard from "../assets/icons/dashboard.svg";
import workshops from "../assets/icons/workshops.svg";
import scriptWorkshops from "../assets/icons/scriptWorkshops.svg";
import instructors from "../assets/icons/instructors.svg";
import educators from "../assets/icons/educators.svg";
import currentWorkshops from "../assets/icons/currentWorkshops.svg";
import pastWorkshopsNav from "../assets/icons/pastWorkshopsNav.svg";
import { NavLink } from "react-router-dom";
export const SideBar = () => {
  return (
    <div className="w-32 bg-blue flex flex-col items-center gap-y-7 pt-5 px-4 pb-16">
      <img src={subLogo} alt="Logo" />
      <div className="flex flex-col">
        <NavLink to="/dashboard" className="rounded-lg py-5 px-4">
          <div className="text-white flex flex-col gap-y-2 items-center">
            <img className="w-7 h-7" src={dashboard} alt="Dashboard" />
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/workshops" className="rounded-lg  py-5 px-4">
          <div className="text-white flex flex-col gap-y-2 items-center">
            <img className="w-7 h-7" src={workshops} alt="Workshops" />
            Workshops
          </div>
        </NavLink>
        <NavLink to="/scriptworkshops" className="rounded-lg  py-5 px-4">
          <div className="text-white flex flex-col gap-y-2 items-center text-center">
            <img
              className="w-7 h-7"
              src={scriptWorkshops}
              alt="Script Workshops"
            />
            Script Workshops
          </div>
        </NavLink>
        <NavLink to="/instructor" className="rounded-lg  py-5 px-4">
          <div className="text-white flex flex-col gap-y-2 items-center">
            <img className="w-7 h-7" src={instructors} alt="Dashboard" />
            Instructors
          </div>
        </NavLink>
        <NavLink to="/educators" className="rounded-lg  py-5 px-4">
          <div className="text-white flex flex-col gap-y-2 items-center">
            <img className="w-7 h-7" src={educators} alt="Educators" />
            Educators
          </div>
        </NavLink>
        <NavLink to="/currentWorkshops" className="rounded-lg  py-5 px-4">
          <div className="text-white flex flex-col gap-y-2 items-center text-center">
            <img
              className="w-7 h-7"
              src={currentWorkshops}
              alt="currentWorkshops"
            />
            Current Workshops
          </div>
        </NavLink>
        <NavLink to="/pastWorkshops" className="rounded-lg  py-5 px-4">
          <div className="text-white flex flex-col gap-y-2 items-center text-center">
            <img
              className="w-7 h-7"
              src={pastWorkshopsNav}
              alt="pastWorkshops"
            />
            Past Workshops
          </div>
        </NavLink>
      </div>
    </div>
  );
};
