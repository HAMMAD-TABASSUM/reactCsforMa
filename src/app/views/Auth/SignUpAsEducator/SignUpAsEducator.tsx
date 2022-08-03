import React, { useState } from "react";
import { PersonalDetails } from "./components/PersonalDetails";
import { SchoolDetails } from "./components/SchoolDetails";
import mainLogo from "../../../assets/icons/mainLogo.svg";

export const SignUpAsEducator = (): JSX.Element => {
  const [infoType, setInfoType] = useState("personal");
  return (
    <div className="bg-image-signup h-screen bg-center bg-no-repeat py-8">
      <div className="main-container m-auto bg-white rounded-lg drop-shadow p-6 w-full">
        <div className="flex flex-col items-center w-full">
          <img className="w-36 h-20" src={mainLogo} alt="" />
          <h1 className="font-bold text-3xl py-2.5">SignUp As Educator</h1>
          <p className="text-base">
            Create an account to see the workshops you are going to attend
          </p>
          <div className="flex justify-around pt-5 w-full text-center">
            <div className="border-b-2 pb-4 border-blue-800 w-full">
              <button
                className="text-xl font-medium"
                onClick={() => setInfoType("personal")}
              >
                Personal Details
              </button>
            </div>
            <div className="border-b pb-4 w-full">
              <button className="text-xl" onClick={() => setInfoType("school")}>
                School Details
              </button>
            </div>
          </div>
        </div>
        {infoType === "personal" && <PersonalDetails />}
        {infoType === "school" && <SchoolDetails />}
      </div>
    </div>
  );
};
