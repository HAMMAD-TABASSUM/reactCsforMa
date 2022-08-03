import React from "react";
import profilePic from "../../../assets/images/profilePic.png";
import { FormikValidator } from "../../../../Shared/Utility/formikValidator";
import { FormikErrorMessage } from "../../../../Shared/Validators";
import { EducatorsProfileValidator } from "./EducatorsProfileValidator";
import { spawn } from "child_process";
import { useFormik } from "formik";
import camera from "../../../assets/icons/camera.svg";

export const EducatorsProfile = () => {
  const educatorsProfile = useFormik<EducatorsProfileValidator>({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      semail: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      number: "",
      schoolDistrict: "",
      schoolName: "",
      schoolSettings: "",
      schoolType: "",
      prole: "",
      student: "",
      pla: "",
      grades: "",
      programming: "",
      race: "",
      personid: "",
      oldPassword: "",
      newPassword: "",
      Confirmation_password: "",
    },

    onSubmit: (values) => {
      console.log("LOGIN-DATA ===>", values);
    },
    validate: FormikValidator.validator(EducatorsProfileValidator),
  });
  return (
    <div className="px-7 pb-7">
      <div className="flex justify-between border-b pb-5">
        <h1 className="text-3xl">My Profile</h1>
        <button className="bg-blue px-9 py-3 text-white rounded-lg">
          Update Profile
        </button>
      </div>
      <form action="" onSubmit={educatorsProfile.handleSubmit}>
        <div className="pt-5">
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
                      onBlur={educatorsProfile.handleBlur}
                      onChange={educatorsProfile.handleChange}
                    />
                    <FormikErrorMessage
                      formik={educatorsProfile}
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
                      onBlur={educatorsProfile.handleBlur}
                      onChange={educatorsProfile.handleChange}
                    />
                    <FormikErrorMessage
                      formik={educatorsProfile}
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
                      onBlur={educatorsProfile.handleBlur}
                      onChange={educatorsProfile.handleChange}
                    />
                    <FormikErrorMessage
                      formik={educatorsProfile}
                      name="email"
                      render={(error) => (
                        <span className="text-red-700 text-sm">{error}</span>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2.5 w-full">
                    <label htmlFor="semail">Summer Email Address</label>
                    <input
                      className="border rounded-lg p-2"
                      type="email"
                      id="semail"
                      name="semail"
                      placeholder="Summer Email Address"
                      onBlur={educatorsProfile.handleBlur}
                      onChange={educatorsProfile.handleChange}
                    />
                    <FormikErrorMessage
                      formik={educatorsProfile}
                      name="semail"
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
                <label htmlFor="address1">Address 1</label>
                <input
                  className="border rounded-lg p-2"
                  type="text"
                  id="address1"
                  name="address1"
                  placeholder="Address"
                  onBlur={educatorsProfile.handleBlur}
                  onChange={educatorsProfile.handleChange}
                />
                <FormikErrorMessage
                  formik={educatorsProfile}
                  name="address1"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-2.5 w-full">
                <label htmlFor="address2">Address 2</label>
                <input
                  className="border rounded-lg p-2"
                  type="text"
                  id="address2"
                  name="address2"
                  placeholder="Address 2"
                  onBlur={educatorsProfile.handleBlur}
                  onChange={educatorsProfile.handleChange}
                />
                <FormikErrorMessage
                  formik={educatorsProfile}
                  name="address2"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-2.5 w-full">
                <label htmlFor="city">City</label>
                <select
                  className="border rounded-lg outline-none p-2"
                  name="city"
                  id="city"
                  onBlur={educatorsProfile.handleBlur}
                  onChange={educatorsProfile.handleChange}
                >
                  <option value={null} disabled selected>
                    Select
                  </option>
                  <option value="">Karachi</option>
                </select>
                <FormikErrorMessage
                  formik={educatorsProfile}
                  name="city"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
            </div>
            <div className="pt-7 flex justify-between gap-x-5">
              <div className="flex flex-col gap-y-2.5 w-full">
                <label htmlFor="state">State</label>
                <select
                  className="border rounded-lg outline-none p-2"
                  name="state"
                  id="state"
                  onBlur={educatorsProfile.handleBlur}
                  onChange={educatorsProfile.handleChange}
                >
                  <option value={null} selected disabled>
                    Select
                  </option>
                  <option value="">Pakistan</option>
                  <option value="">Uk</option>
                </select>
                <FormikErrorMessage
                  formik={educatorsProfile}
                  name="state"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-2.5 w-full">
                <label htmlFor="zip">Zip code</label>
                <select
                  className="border rounded-lg outline-none p-2"
                  name="zip"
                  id="zip"
                  onBlur={educatorsProfile.handleBlur}
                  onChange={educatorsProfile.handleChange}
                >
                  <option value={null} disabled selected>
                    Select
                  </option>
                  <option value="">3000</option>
                </select>
                <FormikErrorMessage
                  formik={educatorsProfile}
                  name="zip"
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
                  placeholder="+923001626426"
                  onBlur={educatorsProfile.handleBlur}
                  onChange={educatorsProfile.handleChange}
                />
                <FormikErrorMessage
                  formik={educatorsProfile}
                  name="number"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="p-7 shadow rounded-xl">
            <h1 className="pb-4 text-lg border-b font-medium">
              School Details
            </h1>
            <div>
              <div className="pt-5 flex justify-between gap-x-5">
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="schoolDistrict">School District</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="schoolDistrict"
                    name="schoolDistrict"
                    placeholder="School District"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="schoolDistrict"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="schoolName">School Name</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    placeholder="School Name"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="schoolName"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="schoolSettings">School Setting</label>
                  <select
                    className="border rounded-lg outline-none p-2"
                    name="schoolSettings"
                    id="schoolSettings"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  >
                    <option value={null} selected disabled>
                      Select
                    </option>
                    <option value="">Ruling</option>
                    <option value="">Law</option>
                  </select>
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="schoolSettings"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
              </div>
              <div className="pt-5 flex justify-between gap-x-5">
                <div className="flex gap-x-3">
                  <div className="flex flex-col gap-y-2.5 w-full">
                    <label htmlFor="schoolType">School Type</label>
                    <select
                      className="border w-48 rounded-lg outline-none p-2"
                      name="schoolType"
                      id="schoolType"
                      onBlur={educatorsProfile.handleBlur}
                      onChange={educatorsProfile.handleChange}
                    >
                      <option value={null} selected disabled>
                        Select
                      </option>
                      <option value="">Public</option>
                    </select>
                    <FormikErrorMessage
                      formik={educatorsProfile}
                      name="schoolType"
                      render={(error) => (
                        <span className="text-red-700 text-sm">{error}</span>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2.5 w-full">
                    <label htmlFor="prole">Primary Role</label>
                    <select
                      className="border w-52 rounded-lg outline-none p-2"
                      name="prole"
                      id="prole"
                      onBlur={educatorsProfile.handleBlur}
                      onChange={educatorsProfile.handleChange}
                    >
                      <option value={null} disabled selected>
                        Select
                      </option>
                      <option value="">Instructer</option>
                    </select>
                    <FormikErrorMessage
                      formik={educatorsProfile}
                      name="prole"
                      render={(error) => (
                        <span className="text-red-700 text-sm">{error}</span>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="student">
                    On average, how many students do you typically work with?
                  </label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="student"
                    name="student"
                    placeholder="54"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="student"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
              </div>
              <div className="pt-7 flex justify-between gap-x-5">
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="pla">Primary Licensure Areas</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="pla"
                    name="pla"
                    placeholder="Type Here"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="pla"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="grades">Grades You are Teaching</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="grades"
                    name="grades"
                    placeholder="6th grade"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="grades"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="programming">
                    Prior Programming Experience
                  </label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="programming"
                    name="programming"
                    placeholder="A Little"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="programming"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
              </div>
              <div className="pt-7 flex justify-between gap-x-5">
                <div className="flex flex-col gap-y-2.5 w-1/2">
                  <label htmlFor="race">Race/ethnicity?</label>
                  <input
                    className="border rounded-lg p-2"
                    type="text"
                    id="race"
                    name="race"
                    placeholder="African Afrianies"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="race"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 w-full">
                  <label htmlFor="">
                    Do you identify as a person with a disability or other
                    chronic conditions?
                  </label>
                  <select
                    className="border rounded-lg outline-none p-2"
                    name="personid"
                    id="personid"
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  >
                    <option value={null} disabled selected>
                      Select
                    </option>
                    <option value="">NO</option>
                    <option value="">Yes</option>
                  </select>
                  <FormikErrorMessage
                    formik={educatorsProfile}
                    name="personid"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
              </div>
            </div>
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
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
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
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
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
                    onBlur={educatorsProfile.handleBlur}
                    onChange={educatorsProfile.handleChange}
                  />
                  <FormikErrorMessage
                    formik={educatorsProfile}
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
