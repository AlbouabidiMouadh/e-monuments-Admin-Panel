import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import url from "../utils/url";
const Login = () => {
  const navigation = useNavigate();
  // const [logedIn , setLogedIn] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginHandler = async () => {
    try {
      const response = await axios.post(
        `${url}/admin-login`,
        {
          email,
          password,
        }
      );

      const data = response.data;

      if (response.status === 200) {
        const { adminname, role, token } = data;
        console.log(response.data);
        sessionStorage.setItem("token", response.data.token);

        // Store adminInfo as a string
        const adminInfo = JSON.stringify({ adminname, role });
        sessionStorage.setItem("adminInfo", adminInfo);
        console.log(sessionStorage.getItem('token'))
        navigation("../dashboard");
        console.log("request made");
      } else {
        console.log("stayed in the login");
        navigation("../login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const ForgetPasswordHandler = () => {
    navigation("../recover-password");
  };
  return (
    <div className="flex min-h-full flex-1 flex-col bg-gray justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-60 w-auto"
          src="pictures/monuments.jpg"
          alt="monuments pic-alt"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <button
                  onClick={() => {
                    // alert("did u forget the password");
                    ForgetPasswordHandler();
                  }}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                loginHandler();
                // alert("signed in");
                // navigation("../dashboard");
              }}
              // type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
