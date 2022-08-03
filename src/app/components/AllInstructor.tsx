import React from "react";
import deleteIcon from "../assets/icons/deleteIcon.svg";
import emailIcon from "../assets/icons/emailIcon.svg";
import callIcon from "../assets/icons/callIcon.svg";
import { Link } from "react-router-dom";
export const AllInstructor = (props: any): JSX.Element => {
  return (
    <Link to="/visitInstructerprofile">
      <div className="p-5 shadow rounded-2xl flex gap-x-4  items-center">
        <div>
          <img className="w-24" src={props.profilePic} alt="" />
        </div>
        <div className=" w-full">
          <div className="flex justify-between">
            <h1 className="text-lg pb-1">{props.profileName}</h1>
            <img src={deleteIcon} alt="" />
          </div>
          <div className="flex gap-x-2">
            <img src={emailIcon} alt="" />
            <span className="text-gray-400 pb-1 text-sm">
              {props.emailAddress}
            </span>
          </div>
          <div className="flex gap-x-2">
            <img src={callIcon} alt="" />
            <span className="text-gray-400 pb-1 text-sm">
              {props.phoneNumber}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
