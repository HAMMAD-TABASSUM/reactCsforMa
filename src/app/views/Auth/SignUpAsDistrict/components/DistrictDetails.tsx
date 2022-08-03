import { FormikValidator } from "../../../../../Shared/Utility/formikValidator";
import { FormikErrorMessage } from "../../../../../Shared/Validators";
import { SignUpDistrictValidator } from "./SignUpDistrictValidator";
import { spawn } from "child_process";
import { useFormik } from "formik";
import React from "react";
export const DistrictDetails = (): JSX.Element => {
  const SignUpDistrict = useFormik<SignUpDistrictValidator>({
    initialValues: {
      districtid: "",
      districtname: "",
      districtAddress: "",
      districtEmail: "",
      password: "",
      confirmation_password: "",
    },

    onSubmit: (values) => {
      console.log("LOGIN-DATA ===>", values);
    },
    validate: FormikValidator.validator(SignUpDistrictValidator),
  });
  return (
    <div className="pt-7">
      <form className="flex flex-col gap-y-6" action="">
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="districtid">ID</label>
            <input
              className="border rounded-lg p-2"
              id="districtid"
              type="text"
              name="districtid"
              placeholder="District ID"
              onBlur={SignUpDistrict.handleBlur}
              onChange={SignUpDistrict.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpDistrict}
              name="districtid"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="districtname">District Name</label>
            <input
              className="border rounded-lg p-2"
              id="districtname"
              type="text"
              name="districtname"
              placeholder="District Name"
              onBlur={SignUpDistrict.handleBlur}
              onChange={SignUpDistrict.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpDistrict}
              name="districtname"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="districtAddress">District Office Address</label>
            <input
              className="border rounded-lg p-2"
              id="districtAddress"
              type="text"
              name="districtAddress"
              placeholder="District Office Address"
              onBlur={SignUpDistrict.handleBlur}
              onChange={SignUpDistrict.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpDistrict}
              name="districtAddress"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="districtEmail">District Email Address</label>
            <input
              className="border rounded-lg p-2"
              id="districtEmail"
              type="email"
              name="districtEmail"
              placeholder="District Email Address"
              onBlur={SignUpDistrict.handleBlur}
              onChange={SignUpDistrict.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpDistrict}
              name="districtEmail"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-lg p-2"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              onBlur={SignUpDistrict.handleBlur}
              onChange={SignUpDistrict.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpDistrict}
              name="password"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="confirmation_password">Confirm Password</label>
            <input
              className="border rounded-lg p-2"
              id="confirmation_password"
              type="password"
              name="confirmation_password"
              placeholder="Confirm Password"
              onBlur={SignUpDistrict.handleBlur}
              onChange={SignUpDistrict.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpDistrict}
              name="confirmation_password"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <button
          className="w-full bg-blue py-4 text-white rounded-lg"
          type="submit"
        >
          Save and Continue
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <a className="text-blue font-bold" href="">
            Log In
          </a>{" "}
          Now
        </p>
      </form>
    </div>
  );
};
