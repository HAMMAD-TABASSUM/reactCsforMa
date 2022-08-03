import { spawn } from "child_process";
import { useFormik } from "formik";
import { FormikValidator } from "../../../../../Shared/Utility/formikValidator";
import { FormikErrorMessage } from "../../../../../Shared/Validators";
import { SignUpEducatorsPersonalValidator } from "./SignUpEduactorsPersonalValidator";

export const PersonalDetails = (): JSX.Element => {
  const SignUpPersonal = useFormik<SignUpEducatorsPersonalValidator>({
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
    },

    onSubmit: (values) => {
      console.log("SIGNUP-DATA ===>", values);
    },
    validate: FormikValidator.validator(SignUpEducatorsPersonalValidator),
  });
  return (
    <div className="pt-7">
      <form
        className="flex flex-col gap-y-6"
        action=""
        onSubmit={SignUpPersonal.handleSubmit}
      >
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="fname">First Name</label>
            <input
              className="border rounded-lg p-2"
              id="fname"
              type="text"
              name="fname"
              placeholder="Enter First Name"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpPersonal}
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
              placeholder="Enter Last Name"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpPersonal}
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
              placeholder="Enter Email Address"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpPersonal}
              name="email"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="semail">Summer Email Address</label>
            <input
              className="border rounded-lg p-2"
              id="semail"
              type="email"
              name="semail"
              placeholder="Enter Summer Email Address"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpPersonal}
              name="semail"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <h1>Address for sending Materials</h1>
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="address1">Address 1</label>
            <input
              className="border rounded-lg p-2"
              id="address1"
              type="text"
              name="address1"
              placeholder="Enter Address 1"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpPersonal}
              name="address1"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="address2">Address 2</label>
            <input
              className="border rounded-lg p-2"
              id="address2"
              type="text"
              name="address2"
              placeholder="Enter Address 2"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpPersonal}
              name="address2"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="city">City</label>
            <select
              className="border rounded-lg p-2"
              id="city"
              name="city"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            >
              <option value={null} selected disabled>
                Select
              </option>
              <option value="saab">Karachi</option>
              <option value="volvo">Islamabad</option>
              <option value="vw">Faisalabad</option>
            </select>
            <FormikErrorMessage
              formik={SignUpPersonal}
              name="city"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="state">State</label>
            <select
              className="border rounded-lg p-2"
              id="state"
              name="state"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            >
              <option value={null} selected disabled>
                Select
              </option>
              <option value="saab">India</option>
              <option value="volvo">ENgland</option>
              <option value="vw">Africa</option>
            </select>
            <FormikErrorMessage
              formik={SignUpPersonal}
              name="state"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="zip">Zip Code</label>
            <select
              className="border rounded-lg p-2"
              id="zip"
              name="zip"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            >
              <option value={null} disabled selected>
                Selcet
              </option>
              <option value="saab">8080</option>
              <option value="volvo">3000</option>
              <option value="vw">8081</option>
            </select>
            <FormikErrorMessage
              formik={SignUpPersonal}
              name="zip"
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
              placeholder="Enter Phone Number"
              onBlur={SignUpPersonal.handleBlur}
              onChange={SignUpPersonal.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpPersonal}
              name="number"
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
