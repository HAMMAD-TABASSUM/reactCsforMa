import React from "react";
import { NavLink } from "react-router-dom";
import edit from "../../app/assets/icons/edit.svg";
export const Card = (props: any): JSX.Element => {
  return (
    <div>
      <div className="border rounded-3xl shadow-lg w-full">
        <img className="w-full" src={props.cardImage} alt="" />
        <div className="px-4 pb-4 w-full">
          <h1 className="text-lg pt-2">{props.cardHeading}</h1>
          <div>
            <span className="text-blue pr-2 text-xl">_</span>
            {props.auther}
          </div>
          <div className="flex gap-5">
            <div className="flex gap-x-2.5 pt-3">
              <img src={props.calender} alt="" />
              <span className="text-gray-400 text-xs">
                {props.calenderHeading}
              </span>
            </div>
            <div className="flex gap-x-2.5 pt-3">
              <img src={props.time} alt="" />
              <span className="text-gray-400 text-xs">{props.timeHeading}</span>
            </div>
          </div>
          <div className="flex gap-x-2.5 pt-3">
            <img src={props.location} alt="" />
            <span className="text-gray-400 text-xs">
              {props.locationHeading}
            </span>
          </div>
          <div className="flex items-center gap-x-3 pt-4 w-full">
            <NavLink
              to="/detailsworkshops"
              className="w-full py-3 border rounded-xl bg-blue text-white text-center"
            >
              See Details
            </NavLink>
            <button className="flex items-center px-5 py-3 bg-green rounded-xl gap-x-2">
              <img src={edit} alt="" />
              <span className="pr-2">Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
