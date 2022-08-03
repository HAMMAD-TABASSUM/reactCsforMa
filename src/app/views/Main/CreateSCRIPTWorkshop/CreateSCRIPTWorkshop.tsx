import React from "react";
import or from "../../../assets/icons/or.svg";
import imgCloud from "../../../assets/icons/imgCloud.svg";
export const CreateSCRIPTWorkshop = () => {
  return (
    <div className="px-7">
      <h1 className="text-3xl">Create SCRIPT Workshop</h1>
      <div className="pt-6">
        <div className="pt-8 px-40 pb-12 rounded-xl shadow">
          <div className="pt-7 flex justify-between gap-x-5">
            <div className="flex flex-col gap-y-2.5 w-full">
              <label htmlFor="">Workshop Title</label>
              <input
                className="border rounded-lg p-2"
                type="text"
                placeholder="Workshop Title"
              />
            </div>
            <div className="flex flex-col gap-y-2.5 w-full">
              <label htmlFor="">Workshop Lead</label>
              <input
                className="border rounded-lg p-2"
                type="text"
                placeholder="Workshop Lead"
              />
            </div>
          </div>
          <div className="pt-7 flex justify-between gap-x-5">
            <div className="flex flex-col gap-y-2.5 w-full">
              <label htmlFor="">Start Date</label>
              <input className="border rounded-lg p-2" type="date" />
            </div>
            <div className="flex flex-col gap-y-2.5 w-full">
              <label htmlFor="">Do you identify a</label>
              <input className="border rounded-lg p-2" type="date" />
            </div>
          </div>
          <div className="pt-7">
            <h1 className="pb-2.5">Add Photo</h1>
            <div className="border-dashed border w-full">
              <label
                className="flex justify-around items-center py-9"
                htmlFor="photo"
              >
                <input type="file" className="hidden" id="photo" />
                <div>
                  <span className="rounded-lg text-blue-700 py-4 px-9 border-2 border-blue-700 text-lg">
                    Browser Files
                  </span>
                </div>
                <div>
                  <img src={or} alt="" />
                </div>
                <div className="flex items-center gap-x-2">
                  <img src={imgCloud} alt="" />
                  <span>Drag & Drop Files Here</span>
                </div>
              </label>
            </div>
            <div className="w-full pt-7 flex flex-col gap-y-2.5">
              <label htmlFor="">
                Description{" "}
                <span className="text-sm text-gray-400">
                  ( Districts Participating)
                </span>
              </label>
              <textarea
                className="w-full border p-2 rounded-lg"
                placeholder="Type here"
                name=""
                id=""
                cols={30}
                rows={2}
              ></textarea>
            </div>
            <div className="flex justify-end pt-8">
              <button className="text-white bg-blue py-4 px-14 rounded">
                Save and Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
