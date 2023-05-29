import axios from "axios";
import React, { useState } from "react";
import url from "../utils/url";
import { useNavigate } from "react-router-dom";

const CreateAdmin = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [role, setRole] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const verifyForm = () => {
    if (
      !firstName |
      !lastName |
      !password |
      !email |
      !confirmPassword |
      !role
    ) {
      setError("missing data");
      return false;
    } else if (password != confirmPassword) {
      setError("passwords are not matching");
      return false;
    } else if (
      (role.toLowerCase != "admin") &
      (role.toLowerCase != "moderator")
    ) {
      setError("Invalid Role");
      return false;
    }
    setError(null);
    return true;
  };
  const createAdminButton = async () => {
    const response = await axios.post(`${url}/create-admin`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
    });
    try {
      alert("l'admin a ete cree en succes ");
      navigate("./");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="container mx-auto py-8">
      <h1 class="text-2xl font-bold mb-6 text-center">Create Admin</h1>
      <div class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            First Name
          </label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Last Name
          </label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Role
          </label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="role"
            name="role"
            placeholder="Role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="confirm-password"
          >
            Confirm Password
          </label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="********"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <div className="block text-red-700 text-sm font-bold mb-2">
            {error}
          </div>
        </div>
        <button
          class="w-full bg-indigo-500 text-sm border border-sky-500 font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          // type="submit"
          onClick={() => {
            // verifyForm();
            // if (verifyForm) {
            createAdminButton();
            // }
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateAdmin;
