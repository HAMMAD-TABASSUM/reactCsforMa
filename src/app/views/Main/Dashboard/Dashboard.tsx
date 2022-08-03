import activeWorkShops from "../../../assets/icons/activeWorkShops.svg";
import aerrowLeft from "../../../assets/icons/aerrowLeft.svg";
import aerrowright from "../../../assets/icons/aerrowRight.svg";
import calender from "../../../assets/icons/calender.svg";
import location from "../../../assets/icons/location.svg";
import time from "../../../assets/icons/time.svg";
import pastWorkShops from "../../../assets/icons/pastWorkShops.svg";
import scriptWorkshops from "../../../assets/icons/scriptWorkshopsimg.svg";
import cardImage from "../../../assets/images/cardImage.png";
import cardImage2 from "../../../assets/images/cardImage2.png";
import graph from "../../../assets/images/graph.png";
import { Dropdown } from "react-bootstrap";
import { Card } from "../../../components";

export const Dashboard = () => {
  return (
    <div className="px-7 pb-7">
      <div className="flex gap-x-8">
        <div className="rounded-xl shadow-xl flex justify-between px-10 py-11 w-full">
          <div>
            <h1 className="text-5xl text-orange-600 font-semibold pb-3.5">
              400
            </h1>
            <h3>Past WorkShops</h3>
          </div>
          <div>
            <img src={pastWorkShops} alt="PastWorkShops" />
          </div>
        </div>
        <div className="rounded-xl shadow-xl flex justify-between px-7 py-11 w-full">
          <div>
            <h1 className="text-5xl text-green-600 font-semibold pb-3.5">
              110
            </h1>
            <h3>Active WorkShops</h3>
          </div>
          <div>
            <img src={activeWorkShops} alt="PastWorkShops" />
          </div>
        </div>
        <div className="rounded-xl shadow-xl flex justify-between px-7 py-11 w-full">
          <div>
            <h1 className="text-5xl text-orange-300 font-semibold pb-3.5">
              35
            </h1>
            <h3>Script WorkShops</h3>
          </div>
          <div>
            <img src={scriptWorkshops} alt="PastWorkShops" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-11">
        <h1 className="text-3xl">Past WorkShops</h1>
        <div className="flex gap-x-5">
          <input
            type="date"
            className="border outline-none rounded-lg py-1 px-4"
          />

          <select
            className="border rounded-lg w-72 outline-none px-4"
            name=""
            id=""
          >
            <option value="">Select WorkShop</option>
            <option value="">Select WorkShop 1</option>
            <option value="">Select WorkShop 2</option>
          </select>
        </div>
      </div>
      <img className="height-img w-full" src={graph} alt="" />
      <div className="flex items-center justify-between border-b pb-5">
        <h1 className="text-3xl">Recently Created Workshops</h1>
        <div className="flex items-center gap-x-7">
          <button className="border px-3.5 rounded-lg py-1">See All</button>
          <div className="flex">
            <img className="w-12 h-12" src={aerrowLeft} alt="" />
            <img className="w-12 h-12" src={aerrowright} alt="" />
          </div>
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
