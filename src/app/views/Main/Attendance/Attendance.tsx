import React from "react";
import back from "../../../assets/icons/back.svg";
import profilePic from "../../../assets/images/profilePic.png";
import { AttendenceEducators } from "../../../components";
export const Attendance = () => {
  return (
    <div className="px-7">
      <div className="flex justify-between border-b pb-4 ">
        <div className="flex gap-x-2 items-center">
          <img src={back} alt="" />
          <span className="text-gray-400">back</span>
        </div>
        <div>
          <input className="border w-72 rounded-lg p-1" type="date" />
        </div>
      </div>
      <div className="grid grid-cols-3 pt-7 gap-7">
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
        <AttendenceEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
        />
      </div>
    </div>
  );
};
