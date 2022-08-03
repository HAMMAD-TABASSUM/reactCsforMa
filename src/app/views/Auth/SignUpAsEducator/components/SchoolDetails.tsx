import { spawn } from "child_process";
import { useFormik } from "formik";
import { FormikValidator } from "../../../../../Shared/Utility/formikValidator";
import { FormikErrorMessage } from "../../../../../Shared/Validators";
import { SignUpEducatorsSchoolValidator } from "./SignUpEducatorsSchoolValidator";

export const SchoolDetails = (): JSX.Element => {
  const SignUpSchool = useFormik<SignUpEducatorsSchoolValidator>({
    initialValues: {
      schoolDistrict: "",
      schoolName: "",
      schoolSetting: "",
      schoolType: "",
      primaryRole: "",
      average: "",
      pla: "",
      grades: "",
      programming: "",
      race: "",
      identify: "",
    },

    onSubmit: (values) => {
      console.log("SIGNUP-DATA ===>", values);
    },
    validate: FormikValidator.validator(SignUpEducatorsSchoolValidator),
  });
  return (
    <div className="pt-7">
      <form
        className="flex flex-col gap-y-6"
        action=""
        onSubmit={SignUpSchool.handleSubmit}
      >
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="schoolDistrict">School District</label>
            <input
              className="border rounded-lg p-2"
              id="schoolDistrict"
              type="text"
              name="schoolDistrict"
              placeholder="School District"
              onBlur={SignUpSchool.handleBlur}
              onChange={SignUpSchool.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpSchool}
              name="schoolDistrict"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="schoolName">School Name</label>
            <input
              className="border rounded-lg p-2"
              id="schoolName"
              type="text"
              name="schoolName"
              placeholder="Enter School Name"
              onBlur={SignUpSchool.handleBlur}
              onChange={SignUpSchool.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpSchool}
              name="schoolName"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between gap-x-6">
          <div className="flex gap-x-7 w-full">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="schoolSetting">School Setting</label>
              <select
                className="border rounded-lg p-2"
                id="schoolSetting"
                name="schoolSetting"
                onBlur={SignUpSchool.handleBlur}
                onChange={SignUpSchool.handleChange}
              >
                <option value={null} disabled selected>
                  Select
                </option>
                <option value="saab">Karachi</option>
                <option value="volvo">Islamabad</option>
                <option value="vw">Faisalabad</option>
              </select>
              <FormikErrorMessage
                formik={SignUpSchool}
                name="schoolSetting"
                render={(error) => (
                  <span className="text-red-700 text-sm">{error}</span>
                )}
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="schoolType">School Type</label>
              <select
                className="border rounded-lg p-2"
                id="schoolType"
                onBlur={SignUpSchool.handleBlur}
                onChange={SignUpSchool.handleChange}
              >
                <option value="Lahore" disabled selected>
                  Select
                </option>
                <option value="saab">Karachi</option>
                <option value="volvo">Islamabad</option>
                <option value="vw">Faisalabad</option>
              </select>
              <FormikErrorMessage
                formik={SignUpSchool}
                name="schoolType"
                render={(error) => (
                  <span className="text-red-700 text-sm">{error}</span>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="primaryRole">PrimaryRole</label>
            <select
              className="border rounded-lg p-2"
              id="primaryRole"
              name="primaryRole"
              onBlur={SignUpSchool.handleBlur}
              onChange={SignUpSchool.handleChange}
            >
              <option value="Lahore" disabled selected>
                Select
              </option>
              <option value="saab">Karachi</option>
              <option value="volvo">Islamabad</option>
              <option value="vw">Faisalabad</option>
            </select>
            <FormikErrorMessage
              formik={SignUpSchool}
              name="primaryRole"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between flex-col gap-y-2">
          <label htmlFor="average">
            On average, how many students do you typically work with?
          </label>
          <input
            className="border rounded-lg p-2"
            id="average"
            type="text"
            name="average"
            placeholder="Type here"
            onBlur={SignUpSchool.handleBlur}
            onChange={SignUpSchool.handleChange}
          />
          <FormikErrorMessage
            formik={SignUpSchool}
            name="average"
            render={(error) => (
              <span className="text-red-700 text-sm">{error}</span>
            )}
          />
        </div>
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="pla">Primary Licensure Areas</label>
            <input
              className="border rounded-lg p-2"
              id="pla"
              type="text"
              name="pla"
              placeholder="Enter Primary Licensure Areas"
              onBlur={SignUpSchool.handleBlur}
              onChange={SignUpSchool.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpSchool}
              name="pla"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="grades">Grades You are Teaching</label>
            <input
              className="border rounded-lg p-2"
              id="grades"
              type="text"
              name="grades"
              placeholder="Enter Grades You are Teaching"
              onBlur={SignUpSchool.handleBlur}
              onChange={SignUpSchool.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpSchool}
              name="grades"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between gap-x-6">
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="programming">Prior Programming Experience</label>
            <input
              className="border rounded-lg p-2"
              id="programming"
              type="text"
              name="programming"
              placeholder="Enter Prior Programming Experience"
              onBlur={SignUpSchool.handleBlur}
              onChange={SignUpSchool.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpSchool}
              name="programming"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="race">Race/ethnicity?</label>
            <input
              className="border rounded-lg p-2"
              id="race"
              type="text"
              name="race"
              placeholder="Enter Race/ethnicity?"
              onBlur={SignUpSchool.handleBlur}
              onChange={SignUpSchool.handleChange}
            />
            <FormikErrorMessage
              formik={SignUpSchool}
              name="race"
              render={(error) => (
                <span className="text-red-700 text-sm">{error}</span>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="identify">
            Do you identify as a person with a disability or other chronic
            conditions?
          </label>
          <select
            className="border rounded-lg p-2"
            id="identify"
            name="identify"
            onBlur={SignUpSchool.handleBlur}
            onChange={SignUpSchool.handleChange}
          >
            <option value="Lahore" disabled selected>
              SelectSignUpSchool
            </option>
            <option value="saab">Karachi</option>
            <option value="volvo">Islamabad</option>
            <option value="vw">Faisalabad</option>
          </select>
          <FormikErrorMessage
            formik={SignUpSchool}
            name="identify"
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
  );
};
