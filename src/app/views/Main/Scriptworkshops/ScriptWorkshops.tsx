import React from "react";
import { Card } from "../../../components";
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

export const ScriptWorkshops = () => {
  return (
    <div className="p-7 h-screen">
      <div className="flex justify-between border-b pb-5">
        <h1 className="text-3xl">Script WorkShops</h1>
        <div className="flex gap-x-12">
          <button className="px-7 py-2 shadow rounded-lg text-sm">
            Current WorkShops
          </button>
          <button className="px-7 py-2 btn-bg-blue rounded-lg text-sm">
            Past WorkShops
          </button>
        </div>
      </div>
      <div className="pt-7 flex gap-x-7 w-full">
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
  );
};
