import React from "react";
import csv from "../../../assets/icons/csv.svg";
import search from "../../../assets/icons/search.svg";

import profilePic from "../../../assets/images/profilePic.png";
import { AllEducators } from "../../../components";
export const Educators = (): JSX.Element => {
  return (
    <div className="px-7 pb-7">
      <div className="flex justify-between border-b pb-5">
        <h1 className="text-3xl">All Educators</h1>
        <div className="flex gap-x-5">
          <div className="flex items-center btn-bg-blue py-2.5 px-5 rounded gap-x-2">
            <div>
              <img src={csv} alt="" />
            </div>
            <span className="text-xs">CSV</span>
          </div>
          <div className="border p-2 flex rounded w-72 justify-between">
            <input
              className="outline-none w-full pr-2"
              type="text"
              placeholder="Search Here"
            />
            <img src={search} alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 pt-7 gap-7">
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
        <AllEducators
          profilePic={profilePic}
          profileName="Arkell Charles"
          administrator="Administrator Elementary"
          school="Blue Ridge School System"
          email=" martin-thomas@gmail.com"
          phoneNumber="+1 234 567 8901"
          locationschool=" 1077 Woodridge Lane, Arlington, TN, Tennessee"
        />
      </div>
    </div>
  );
};
