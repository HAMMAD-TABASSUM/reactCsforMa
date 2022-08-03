import { spawn } from "child_process";
import { useFormik } from "formik";
import React from "react";
import mainLogo from "../../../assets/icons/mainLogo.svg";
import { FormikValidator } from "../../../../Shared/Utility/formikValidator";
import { FormikErrorMessage } from "../../../../Shared/Validators";
import { LoginFormValidator } from "./LoginFormValidator";

export const Login = (): JSX.Element => {
  const Login = useFormik<LoginFormValidator>({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log("LOGIN-DATA ===>", values);
    },
    validate: FormikValidator.validator(LoginFormValidator),
  });
  return (
    <div className="bg-image h-screen bg-center bg-no-repeat py-8">
      <div className="main-container m-auto bg-white rounded-lg drop-shadow p-6">
        <div className="flex flex-col items-center">
          <img className="w-36 h-20" src={mainLogo} alt="" />
          <h1 className="font-bold text-3xl py-2.5">LogIn</h1>
          <p className="text-base">Enter Your Email And And Passwod</p>
        </div>
        <div className="pt-7 flex justify-center">
          <form
            className="flex flex-col gap-y-6 w-96"
            action=""
            onSubmit={Login.handleSubmit}
          >
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="email">Email</label>
                <input
                  className="border rounded-lg p-2"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onBlur={Login.handleBlur}
                  onChange={Login.handleChange}
                />
                <FormikErrorMessage
                  formik={Login}
                  name="email"
                  render={(error) => (
                    <span className="text-red-700 text-sm">{error}</span>
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="lname">Password</label>
                <input
                  className="border rounded-lg p-2"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="******"
                  onBlur={Login.handleBlur}
                  onChange={Login.handleChange}
                />
                <FormikErrorMessage
                  formik={Login}
                  name="password"
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
              LogIn
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <a className="text-blue font-bold" href="#">
                SignUp
              </a>{" "}
              Now
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
