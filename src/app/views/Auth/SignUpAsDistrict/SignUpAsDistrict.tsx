import React, { useState } from "react";
import { AddMember, DistrictDetails } from "./components";
import mainLogo from "../../../assets/icons/mainLogo.svg";

export const SignUpAsDistrict = (): JSX.Element => {
  const [infoType, setInfoType] = useState("district");
  return (
    <div className="bg-image h-screen bg-center bg-no-repeat py-8">
      <div className="main-container m-auto bg-white rounded-lg drop-shadow p-6 w-full">
        <div className="flex flex-col items-center w-full">
          <img className="w-36 h-20" src={mainLogo} alt="logo" />
          <h1 className="font-bold text-3xl py-2.5">SCRIPT Workshop SignUp</h1>
          <p className="text-base">
            Create an account to see the workshops you are invited
          </p>
          <div className="flex justify-around pt-5 w-full text-center">
            <div className="border-b-2 pb-4 border-blue-800 w-full">
              <button
                className="text-xl font-medium"
                onClick={() => setInfoType("district")}
              >
                District Details
              </button>
            </div>
            <div className="border-b pb-4 w-full">
              <button
                className="text-xl"
                onClick={() => setInfoType("addmember")}
              >
                Add Team Members
              </button>
            </div>
          </div>
        </div>
        {infoType === "district" && <DistrictDetails />}
        {infoType === "addmember" && <AddMember />}
      </div>
    </div>
  );
};
