import React from "react";

export const AttendenceEducators = (props: any): JSX.Element => {
  return (
    <div className="shadow-lg p-5 rounded-2xl flex gap-x-4 text-lg">
      <div>
        <img className="w-16" src={props.profilePic} alt="" />
      </div>
      <div className="flex flex-col gap-y-1">
        <h1>{props.profileName}</h1>
        <div className="flex gap-x-2.5">
          <button className="px-6 py-2 rounded-xl bg-green text-xs">
            Present
          </button>
          <button className="px-6 py-2 rounded-xl bg-red-100 text-xs">
            Absent
          </button>
        </div>
      </div>
    </div>
  );
};
