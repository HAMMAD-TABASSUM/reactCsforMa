import React from "react";
import option from "../assets/icons/option.svg";
export const EducatorsProfile = (props: any): JSX.Element => {
  return (
    <div className="flex justify-between items-center border-t pt-5">
      <div className="flex gap-x-2 items-center">
        <img src={props.profile} alt="" />
        <div>
          <h1 className="text-lg">{props.name}</h1>
          <div className="flex items-center">
            <img src={props.emailIcon} alt="" />
            <h4 className="text-sm pl-2 text-gray-500">{props.mail}</h4>
          </div>
        </div>
      </div>
      <div>
        <div className="dropdown">
          <button
            className="inline-flex justify-center w-full text-sm leading-5  transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            aria-controls="headlessui-menu-items-117"
          >
            <img className="p-2" src={option} alt="" />
          </button>
          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div
              className="absolute right-0 w-40 rounded-lg mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              aria-labelledby="headlessui-menu-button-1"
              id="headlessui-menu-items-117"
              role="menu"
            >
              <div className="px-4 py-3 flex gap-y-2 flex-col">
                <p className="text-sm leading-5">Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
