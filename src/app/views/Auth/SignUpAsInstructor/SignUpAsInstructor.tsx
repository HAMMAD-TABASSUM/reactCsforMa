import React from "react";
import mainLogo from "../../../assets/icons/mainLogo.svg";
import { spawn } from "child_process";
import { useFormik } from "formik";
import { FormikValidator } from "../../../../Shared/Utility/formikValidator";
import { FormikErrorMessage } from "../../../../Shared/Validators";
import { SignUpInstructorValidator } from "./SignUpInstructorValidator";

export const SignUpAsInstructor = (): JSX.Element => {
  const SignUp = useFormik<SignUpInstructorValidator>({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      number: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      resume: "",
      bio: "",
    },

    onSubmit: (values) => {
      console.log("SIGNUP-DATA ===>", values);
    },
    validate: FormikValidator.validator(SignUpInstructorValidator),
  });
  return (
    <div className="bg-image h-screen bg-center bg-no-repeat py-8">
      <div className="main-container m-auto bg-white rounded-lg drop-shadow p-6 w-full">
        <div className="flex flex-col items-center w-full">
          <img className="w-36 h-20" src={mainLogo} alt="" />
          <h1 className="font-bold text-3xl py-2.5">SignUp As Instructor</h1>
          <p className="text-base">
            Create an account to see the workshops you are going to attend
          </p>
        </div>
        <div className="pt-7">
          <form
            className="flex flex-col gap-y-6"
            action=""
            onSubmit={SignUp.handleSubmit}
          >
            <div className="flex justify-between gap-x-6">
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="fname">First Name</label>
                <input
                  className="border rounded-lg p-2"
                  id="fname"
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  onBlur={SignUp.handleBlur}
                  onChange={SignUp.handleChange}
                />
                <FormikErrorMessage
                  formik={SignUp}
                  name="fname"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="lname">Last Name</label>
                <input
                  className="border rounded-lg p-2"
                  id="lname"
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  onBlur={SignUp.handleBlur}
                  onChange={SignUp.handleChange}
                />
                <FormikErrorMessage
                  formik={SignUp}
                  name="lname"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-between gap-x-6">
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="email">Email Address</label>
                <input
                  className="border rounded-lg p-2"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onBlur={SignUp.handleBlur}
                  onChange={SignUp.handleChange}
                />
                <FormikErrorMessage
                  formik={SignUp}
                  name="email"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="number">Phone Number</label>
                <input
                  className="border rounded-lg p-2"
                  id="number"
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  onBlur={SignUp.handleBlur}
                  onChange={SignUp.handleChange}
                />
                <FormikErrorMessage
                  formik={SignUp}
                  name="number"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-between gap-x-6">
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="address">Address</label>
                <input
                  className="border rounded-lg p-2"
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Address"
                  onBlur={SignUp.handleBlur}
                  onChange={SignUp.handleChange}
                />
                <FormikErrorMessage
                  formik={SignUp}
                  name="address"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex gap-x-7 w-full">
                <div className="flex flex-col gap-y-2 w-full">
                  <label htmlFor="city">City</label>
                  <select
                    name="city"
                    className="border rounded-lg p-2"
                    id="city"
                    onBlur={SignUp.handleBlur}
                    onChange={SignUp.handleChange}
                  >
                    <option value={null} selected>
                      Select
                    </option>
                    <option value="saab">Karachi</option>
                    <option value="volvo">Islamabad</option>
                    <option value="vw">Faisalabad</option>
                  </select>
                  <FormikErrorMessage
                    formik={SignUp}
                    name="city"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                  <label htmlFor="state">State</label>
                  <select
                    name="state"
                    className="border rounded-lg p-2"
                    id="state"
                    onBlur={SignUp.handleBlur}
                    onChange={SignUp.handleChange}
                  >
                    <option selected disabled value={null}>
                      Select
                    </option>
                    <option value="Lahore">Lahore</option>
                    <option value="saab">Karachi</option>
                    <option value="volvo">Islamabad</option>
                    <option value="vw">Faisalabad</option>
                  </select>
                  <FormikErrorMessage
                    formik={SignUp}
                    name="state"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-x-6">
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="zip">Zip Code</label>
                <select
                  name="zip"
                  className="border rounded-lg p-2"
                  id="zip"
                  onBlur={SignUp.handleBlur}
                  onChange={SignUp.handleChange}
                >
                  <option value={null} selected disabled>
                    Select
                  </option>
                  <option value="saab">8080</option>
                  <option value="volvo">3000</option>
                  <option value="vw">8081</option>
                </select>
                <FormikErrorMessage
                  formik={SignUp}
                  name="zip"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <h4 className="pb-2">Upload Resume</h4>
                <label htmlFor="resume">
                  <input
                    className="hidden"
                    type="file"
                    id="resume"
                    onBlur={SignUp.handleBlur}
                    onChange={SignUp.handleChange}
                  />
                  <FormikErrorMessage
                    formik={SignUp}
                    name="resume"
                    render={(error) => (
                      <span className="text-red-700 text-sm">{error}</span>
                    )}
                  />
                  <span className="py-2 px-7 border-2 border-blue-700 text-blue-700 rounded-xl">
                    Browser File
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="bio">
                Brief Bio{" "}
                <span className="text-xs text-gray-500">
                  (Please provide a short paragraph about yourself)
                </span>
              </label>
              <textarea
                className="border rounded-lg p-2"
                placeholder="Brief Bio"
                name="bio"
                id="bio"
                onBlur={SignUp.handleBlur}
                onChange={SignUp.handleChange}
              ></textarea>
              <FormikErrorMessage
                formik={SignUp}
                name="bio"
                render={(error) => (
                  <span className="text-red-700 text-sm">{error}</span>
                )}
              />
            </div>
            <button
              className="w-full bg-blue py-4 text-white rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <a className="text-blue font-bold" href="#">
                Log In
              </a>{" "}
              Now
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
