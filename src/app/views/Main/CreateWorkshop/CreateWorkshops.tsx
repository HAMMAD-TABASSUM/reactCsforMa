import React, { useState } from "react";
import imgCloud from "../../../assets/icons/imgCloud.svg";
import deleteIcon from "../../../assets/icons/deleteIcon.svg";
import { FormikValidator } from "../../../../Shared/Utility/formikValidator";
import { FormikErrorMessage } from "../../../../Shared/Validators";
import { CreateWorkshopValidator } from "./CreateWorkshopValidator";
import { spawn } from "child_process";
import { useFormik } from "formik";

export const CreateWorkshops = (): JSX.Element => {
  // Validators

  const createWorkshop = useFormik<CreateWorkshopValidator>({
    initialValues: {
      workshopTitle: "",
      inviteInstructor: "",
      workshopType: "",
      workshopdiscription: "",
    },

    onSubmit: (values) => {
      console.log("createWorkshop-DATA ===>", values);
    },
    validate: FormikValidator.validator(CreateWorkshopValidator),
  });

  // Add Dynamic day

  const [inputList, setInputList] = useState([
    { title: "", date: "", time: "", description: "" },
  ]);

  // handle input change
  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: any) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { title: "", date: "", time: "", description: "" },
    ]);
  };
  return (
    <div className="px-7 pb-7">
      <h1 className="text-3xl pb-6">Create Workshop</h1>
      <form
        className="w-full shadow rounded-xl px-40 py-9"
        action=""
        onSubmit={createWorkshop.handleSubmit}
      >
        <div className="flex gap-y-7 flex-col pb-7">
          <div className="flex gap-x-5">
            <div className="flex gap-y-2.5 flex-col w-full">
              <label htmlFor="workshopTitle">Workshop Title</label>
              <input
                className="border rounded-md p-2"
                id="workshopTitle"
                name="workshopTitle"
                type="text"
                placeholder="Workshop Title"
                onBlur={createWorkshop.handleBlur}
                onChange={createWorkshop.handleChange}
              />
              <FormikErrorMessage
                formik={createWorkshop}
                name="workshopTitle"
                render={(error) => (
                  <span className="text-red-700 text-sm">{error}</span>
                )}
              />
            </div>
            <div className="flex gap-y-2.5 flex-col w-full">
              <label htmlFor="inviteInstructor">Invite Instructor</label>
              <input
                className="border rounded-md p-2"
                id="inviteInstructor"
                type="email"
                name="inviteInstructor"
                placeholder="Instructor Email"
                onBlur={createWorkshop.handleBlur}
                onChange={createWorkshop.handleChange}
              />
              <FormikErrorMessage
                formik={createWorkshop}
                name="inviteInstructor"
                render={(error) => (
                  <span className="text-red-700 text-sm">{error}</span>
                )}
              />
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="flex gap-y-2.5 flex-col w-full">
              <label htmlFor="workshopType">Workshop Type</label>

              <select
                className="border rounded-md outline-none p-2"
                name="workshopType"
                id="workshopType"
                onBlur={createWorkshop.handleBlur}
                onChange={createWorkshop.handleChange}
              >
                <option value={null} selected disabled>
                  Select
                </option>
                <option value="">Regular</option>
              </select>
              <FormikErrorMessage
                formik={createWorkshop}
                name="workshopType"
                render={(error) => (
                  <span className="text-red-700 text-sm">{error}</span>
                )}
              />
            </div>
            <div className="flex gap-y-2.5 flex-col w-full">
              <label htmlFor="url">Link for Workshop</label>
              <input
                className="border rounded-md p-2"
                type="url"
                name="url"
                id="url"
                placeholder="Paste URL here"
                onBlur={createWorkshop.handleBlur}
                onChange={createWorkshop.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="border-dashed border p-2.5 rounded">
          <div className=" bg-gray-200 rounded pt-12 pb-6">
            <div className="flex justify-center text-center">
              <label className="flex flex-col gap-y-5" htmlFor="img-drag-drop">
                <input className="hidden" type="file" id="img-drag-drop" />
                <div className="pl-14">
                  <img src={imgCloud} alt="" />
                </div>
                <h5 className="text-gray-500">
                  Drag & Drop Image Here <h5 className="text-black">or</h5>
                </h5>
                <span className="px-4 py-2.5 bg-blue rounded text-white">
                  Browser Image
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full pt-7 flex flex-col gap-y-2.5">
          <label htmlFor="workshopdiscription">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Description"
            name="workshopdiscription"
            id="workshopdiscription"
            cols={30}
            rows={2}
            onBlur={createWorkshop.handleBlur}
            onChange={createWorkshop.handleChange}
          ></textarea>
          <FormikErrorMessage
            formik={createWorkshop}
            name="workshopdiscription"
            render={(error) => (
              <span className="text-red-700 text-sm">{error}</span>
            )}
          />
        </div>
        <div>
          <div className="py-8">
            {inputList.map((x, i) => {
              return (
                <div className="box">
                  <div className="flex justify-between pt-8">
                    <h1 className="text-2xl">Day</h1>
                    <button
                      className="flex items-center gap-x-2 bg-red-100 rounded p-2"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <img src={deleteIcon} alt="" />
                      <span>Delete</span>
                    </button>
                  </div>

                  <div className="flex gap-x-5">
                    <div className="flex flex-col gap-2.5 w-full">
                      <label htmlFor="title">Title</label>
                      <input
                        className="border p-2 rounded-md"
                        name="title"
                        id="title"
                        placeholder="Enter First Name"
                        value={x.title}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 w-1/2">
                      <label htmlFor="">Date</label>

                      <input
                        className="border p-2 rounded-md"
                        name="lastName"
                        type="date"
                        placeholder="Enter Last Name"
                        value={x.date}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 w-1/2">
                      <label htmlFor="">Time</label>

                      <input
                        className="border p-2 rounded-md"
                        name="lastName"
                        type="time"
                        placeholder="Enter Last Name"
                        value={x.time}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 w-full pt-7">
                    <label htmlFor="">Description</label>
                    <input
                      className="border p-2 rounded-md"
                      name="description"
                      placeholder="Enter First Name"
                      value={x.description}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-x-5">
          <button className="bg-blue py-4 w-full rounded-xl text-white">
            Save and Publish Workshop
          </button>
          <button
            className="btn-bg-blue py-4 w-full rounded-xl"
            onClick={handleAddClick}
          >
            Add Another Day
          </button>
        </div>
      </form>
    </div>
  );
};
