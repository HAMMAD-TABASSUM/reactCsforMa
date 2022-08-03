import React from "react";
import profilePic from "../../../assets/images/profilePic.png";
import { FormikValidator } from "../../../../Shared/Utility/formikValidator";
import { FormikErrorMessage } from "../../../../Shared/Validators";
import { InstructorProfileValidator } from "./InstructorProfileValidator";
import { spawn } from "child_process";
import { useFormik } from "formik";
import camera from "../../../assets/icons/camera.svg";

export const InstructerProfile = () => {
  const instructorProfile = useFormik<InstructorProfileValidator>({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      number: "",
      address: "",
      city: "",
      zip: "",
      resume: "",
      summry: "",
      newPassword: "",
      Confirmation_password: "",
    },

    onSubmit: (values) => {
      console.log("LOGIN-DATA ===>", values);
    },
    validate: FormikValidator.validator(InstructorProfileValidator),
  });
  return (
    <div className="px-7 pb-7">
      <div className="flex justify-between border-b pb-5">
        <h1 className="text-3xl">My Profile</h1>
        <button className="bg-blue px-9 py-3 text-white rounded-lg">
          Update Profile
        </button>
      </div>
      <form
        className="pt-7"
        action=""
        onSubmit={instructorProfile.handleSubmit}
      >
        <div className="p-7 shadow rounded-xl">
          <div className="flex gap-x-5">
            <div className="btn-bg-blue flex justify-center items-center rounded-xl w-6/12">
              <div className="py-7">
                <div className="relative">
                  <label htmlFor="profile_pic">
                    <input type="file" className="hidden" id="profile_pic" />
                    <img className="w-44" src={profilePic} alt="" />
                    <div className="absolute right-0 bottom-0">
                      <img src={camera} alt="" />
                    </div>
                  </label>
                </div>
                <h1 className="text-xl pt-4 pl-6">Jerry Dawson</h1>
              </div>
            </div>
            <div className="w-full">
              <h1 className="border-b text-xl pb-6">Personal Details</h1>
              <div className="pt-7 flex justify-between gap-x-5">
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="fname">First Name</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                    onBlur={instructorProfile.handleBlur}
                    onChange={instructorProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={instructorProfile}
                    name="fname"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                    onBlur={instructorProfile.handleBlur}
                    onChange={instructorProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={instructorProfile}
                    name="lname"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
              </div>
              <div className="pt-7 flex justify-between gap-x-5">
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="border rounded-lg p-2"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    onBlur={instructorProfile.handleBlur}
                    onChange={instructorProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={instructorProfile}
                    name="email"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="number">Phone Number</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="number"
                    name="number"
                    placeholder="03001626426"
                    onBlur={instructorProfile.handleBlur}
                    onChange={instructorProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={instructorProfile}
                    name="number"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7 flex justify-between gap-x-5">
            <div className="flex flex-col gap-y-2.5 w-full">
              <label htmlFor="address">Address</label>
              <input
                className="border rounded-lg p-2"
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                onBlur={instructorProfile.handleBlur}
                onChange={instructorProfile.handleChange}
              />
              <FormikErrorMessage
                formik={instructorProfile}
                name="address"
                render={(error) => (
                  <span className="text-red-700 text-sm">{error}</span>
                )}
              />
            </div>
            <div className="flex gap-x-5">
              <div className="flex flex-col gap-y-2.5 w-full">
                <label htmlFor="city">City</label>
                <select
                  className="border w-48 rounded-lg outline-none p-2"
                  name="city"
                  id="city"
                  onBlur={instructorProfile.handleBlur}
                  onChange={instructorProfile.handleChange}
                >
                  <option value="">Lahore</option>
                  <option value="">Karachi</option>
                </select>
                <FormikErrorMessage
                  formik={instructorProfile}
                  name="city"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-2.5 w-full">
                <label htmlFor="state">State</label>
                <select
                  className="border w-48 rounded-lg outline-none p-2"
                  name="state"
                  id="state"
                  onBlur={instructorProfile.handleBlur}
                  onChange={instructorProfile.handleChange}
                >
                  <option value="">Pakistan</option>
                  <option value="">Uk</option>
                </select>
                <FormikErrorMessage
                  formik={instructorProfile}
                  name="state"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2.5 w-full">
              <label htmlFor="zip">Zip code</label>
              <select
                className="border rounded-lg outline-none p-2"
                name="zip"
                id="zip"
                onBlur={instructorProfile.handleBlur}
                onChange={instructorProfile.handleChange}
              >
                <option value="">8080</option>
                <option value="">3000</option>
              </select>
              <FormikErrorMessage
                formik={instructorProfile}
                name="zip"
                render={(error) => (
                  <span className="text-red-700 text-sm">{error}</span>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full pt-3">
            <h4 className="pb-2">Upload New Resume</h4>
            <label htmlFor="resume">
              <input
                className="hidden"
                type="file"
                id="resume"
                onBlur={instructorProfile.handleBlur}
                onChange={instructorProfile.handleChange}
              />
              <span className="py-2 px-7 border-2 border-blue-700 text-blue-700 rounded-xl">
                Browser File
              </span>
            </label>
            <FormikErrorMessage
              formik={instructorProfile}
              name="resume"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="w-full pt-7 flex flex-col gap-y-2.5">
            <label htmlFor="summry">Personal Summary</label>
            <textarea
              className="w-full border p-2 rounded"
              placeholder="Type here"
              name="summry"
              id="summry"
              cols={30}
              rows={2}
              onBlur={instructorProfile.handleBlur}
              onChange={instructorProfile.handleChange}
            ></textarea>
            <FormikErrorMessage
              formik={instructorProfile}
              name="summry"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="p-7 shadow rounded-xl">
            <h1 className="pb-4 text-lg border-b font-medium">
              Update Password
            </h1>
            <div>
              <div className="pt-5 flex justify-between gap-x-5">
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="oldPassword">Old Password</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="oldPassword"
                    name="oldPassword"
                    placeholder="Old Password"
                    onBlur={instructorProfile.handleBlur}
                    onChange={instructorProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={instructorProfile}
                    name="oldPassword"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    className="border rounded-lg p-2"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="New Password"
                    onBlur={instructorProfile.handleBlur}
                    onChange={instructorProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={instructorProfile}
                    name="newPassword"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="Confirmation_password">
                    Confirm New Password
                  </label>
                  <input
                    className="border rounded-lg p-2"
                    type="password"
                    id="Confirmation_password"
                    name="Confirmation_password"
                    placeholder="Confirm New Password"
                    onBlur={instructorProfile.handleBlur}
                    onChange={instructorProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={instructorProfile}
                    name="Confirmation_password"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
