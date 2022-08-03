import React from "react";
import csv from "../../../assets/icons/csv.svg";
import search from "../../../assets/icons/search.svg";
import deleteIcon from "../../../assets/icons/deleteIcon.svg";
import profilePic from "../../../assets/images/profilePic.png";
import activeWorkShops from "../../../assets/icons/activeWorkShops.svg";
import aerrowLeft from "../../../assets/icons/aerrowLeft.svg";
import aerrowright from "../../../assets/icons/aerrowRight.svg";
import calender from "../../../assets/icons/calender.svg";
import location from "../../../assets/icons/location.svg";
import pastWorkShops from "../../../assets/icons/pastWorkShops.svg";
import scriptWorkshops from "../../../assets/icons/scriptWorkshopsimg.svg";
import cardImage from "../../../assets/images/cardImage.png";
import cardImage2 from "../../../assets/images/cardImage2.png";
import graph from "../../../assets/images/graph.png";
import time from "../../../assets/icons/time.svg";
import { Card } from "../../../components";

export const VisitInstructerProfile = (): JSX.Element => {
  return (
    <div className="px-7 pb-7">
      <div className="flex justify-between border-b pb-5">
        <h1 className="text-3xl">Jerry Dawson</h1>
        <div className="flex gap-x-5">
          <div className="flex items-center btn-bg-blue py-2.5 px-5 rounded gap-x-2">
            <div>
              <img src={csv} alt="" />
            </div>
            <span className="text-xs">Download CV</span>
          </div>
          <div>
            <button className="flex items-center gap-x-2 bg-red-100 rounded p-2">
              <img src={deleteIcon} alt="" />
              <span className="text-xs">Delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-7">
        <div className="p-7 shadow rounded-xl">
          <div className="flex gap-x-5">
            <div className="btn-bg-blue flex justify-center items-center rounded-xl w-6/12">
              <div className="py-7">
                <img className="w-44" src={profilePic} alt="" />
                <h1 className="text-xl pt-4 pl-6">Jerry Dawson</h1>
              </div>
            </div>
            <div className="w-full">
              <h1 className="border-b text-xl pb-6">Personal Details</h1>
              <div className="pt-7 flex justify-between gap-x-5">
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="">First Name</label>
                  <input
                    className="border rounded-lg p-2 bg-gray-50"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="">Last Name</label>
                  <input
                    className="border rounded-lg p-2 bg-gray-50"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="pt-7 flex justify-between gap-x-5">
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="">Email Address</label>
                  <input
                    className="border rounded-lg p-2 bg-gray-50"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="">Phone Number</label>
                  <input
                    className="border rounded-lg p-2 bg-gray-50"
                    type="text"
                    placeholder="03001626426"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7 flex justify-between gap-x-5">
            <div className="flex flex-col gap-y-2.5 w-full">
              <label htmlFor="">Address</label>
              <input
                className="border rounded-lg p-2 bg-gray-50"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="flex gap-x-5">
              <div className="flex flex-col gap-y-2.5 w-full">
                <label htmlFor="">City</label>
                <input
                  className="border rounded-lg p-2 bg-gray-50"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="flex flex-col gap-y-2.5 w-full">
                <label htmlFor="">State</label>
                <input
                  className="border rounded-lg p-2 bg-gray-50"
                  type="text"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2.5 w-full">
              <label htmlFor="">Zip code</label>
              <input
                className="border rounded-lg p-2 bg-gray-50"
                type="text"
                placeholder="03001"
              />
            </div>
          </div>
          <div className="w-full pt-7 flex flex-col gap-y-2.5">
            <label htmlFor="">Personal Summary</label>
            <textarea
              className="w-full border p-2 rounded bg-gray-50"
              placeholder="Type here"
              name=""
              id=""
              cols={30}
              rows={2}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between border-b pb-5 pt-10">
          <h1 className="text-3xl">WorkShops</h1>
          <div className="flex gap-x-12">
            <button className="px-7 py-2 shadow rounded-lg text-sm">
              Current WorkShops
            </button>
            <button className="px-7 py-2 btn-bg-blue rounded-lg text-sm">
              Past WorkShops
            </button>
          </div>
        </div>
        <div className="pt-7 flex justify-between">
          <Card
            cardImage={cardImage}
            cardHeading="Join us for a special event featuring Arne Duncan, former U.S …"
            auther="By Alberta Berg"
            calender={calender}
            calenderHeading="Thursday, April 15th"
            time={time}
            timeHeading="10 am PST / 1 pm EST"
            location={location}
            locationHeading="1710 Blanc Ln, FL, 32577"
          />
          <Card
            cardImage={cardImage2}
            cardHeading="Introduction to Big Data and Artificial Intelligance"
            auther="By Dr Kreg"
            calender={calender}
            calenderHeading="Thursday, April 15th"
            time={time}
            timeHeading="10 am PST / 1 pm EST"
            location={location}
            locationHeading="1710 Blanc Ln, FL, 32577"
          />
          <Card
            cardImage={cardImage}
            cardHeading="Join us for a special event featuring Arne Duncan, former U.S …"
            auther="By Alberta Berg"
            calender={calender}
            calenderHeading="Thursday, April 15th"
            time={time}
            timeHeading="10 am PST / 1 pm EST"
            location={location}
            locationHeading="1710 Blanc Ln, FL, 32577"
          />
        </div>
      </div>
    </div>
  );
};
