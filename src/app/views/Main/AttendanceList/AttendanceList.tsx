import React from "react";
import back from "../../../assets/icons/back.svg";
import attendenceleft from "../../../assets/icons/attendenceLeft.svg";
import attendenceright from "../../../assets/icons/attendenceRight.svg";
import profilePic from "../../../assets/images/profilePic.png";

export const AttendanceList = () => {
  return (
    <div className="px-7 pt-7">
      <div className="flex gap-x-2 items-center">
        <img src={back} alt="" />
        <span className="text-gray-400">back</span>
      </div>
      <div className="pt-7">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Educator
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 16
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 17
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 18
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 19
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 20
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 21
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 22
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 23
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 24
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 25
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 26
                </th>
                <th scope="col" className="px-2 py-3">
                  Apr 27
                </th>
                <th scope="col" className="pr-3 py-3 flex">
                  <div className="pr-2">
                    <img className="w-2.5" src={attendenceleft} alt="" />
                  </div>
                  <div className="border-l pl-2">
                    <img className="w-2.5" src={attendenceright} alt="" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-t">
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap flex items-center gap-x-2">
                  <img className="w-10" src={profilePic} alt="" />
                  <h2 className="text-md">Muhammad hammad Tabassum</h2>
                </th>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-t">
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap flex items-center gap-x-2">
                  <img className="w-10" src={profilePic} alt="" />
                  <h2 className="text-md">hammad</h2>
                </th>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button className="rounded-sm bg-red-100 text-sm px-2 .5py-1">
                      A
                    </button>
                    <button className="rounded-sm bg-green text-sm px-2.5 py-1">
                      P
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-t">
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap flex items-center gap-x-2"></th>
                <td className="px-2 py-4">
                  <button className="rounded-md px-2.5 py-2 text-white bg-blue">
                    Submit
                  </button>
                </td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
                <td className="px-2 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
