import React from "react";
// import "./style.css";
import { useState } from "react";
import axios from "axios";
import url from "../utils/url";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const resetPassword = async () => {
    const response = await axios.post(`${url}/password-recover`, {
      type: "admin",
      email: email,
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Forgot Password</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="email">
              Email Address
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
              onClick={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            // type="submit"
            onClick={() => {
              resetPassword();
            }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
