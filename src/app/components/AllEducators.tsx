import React from "react";
import deleteIcon from "../assets/icons/deleteIcon.svg";
import emailIcon from "../assets/icons/emailIcon.svg";
import callIcon from "../assets/icons/callIcon.svg";
import location from "../assets/icons/location.svg";
export const AllEducators = (props: any): JSX.Element => {
  return (
    <div className="p-5 shadow rounded-2xl">
      <div className=" flex gap-x-4">
        <div>
          <img className="w-24" src={props.profilePic} alt="" />
        </div>
        <div className=" w-full">
          <div className="flex justify-between">
            <h1 className="text-lg">{props.profileName}</h1>
            <img src={deleteIcon} alt="" />
          </div>
          <h3 className="text-gray-400 text-sm">{props.administrator}</h3>
          <h3 className=" pb-1 text-sm">{props.school}</h3>
        </div>
      </div>
      <div className="flex gap-x-2 pt-2.5">
        <img src={emailIcon} alt="" />
        <span className="text-gray-400 pb-1 text-sm">{props.email}</span>
      </div>
      <div className="flex gap-x-2">
        <img src={callIcon} alt="" />
        <span className="text-gray-400 pb-1 text-sm">{props.phoneNumber}</span>
      </div>
      <div className="flex gap-x-2">
        <img src={location} alt="" />
        <span className="text-gray-400 pb-1 text-sm">
          {props.locationschool}
        </span>
      </div>
    </div>
  );
};
