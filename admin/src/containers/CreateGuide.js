import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/url";
import { v4 as uuid } from "uuid";

const CreateGuide = () => {
  // const uuid = uuid
  const [file, setFile] = useState(null);
  // const theUser = sessionStorage.getItem("adminInfo")
  // const [user, setUser] = useState(theUser.adminname);
  const [user, setUser] = useState("");
  const [filePath, setFilePath] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pictureName, setPictureName] = useState();
  // console.log(pictureName);
  const fileSelectHandler = (e) => {
    const param = e.target.files[0];
    setFile(e.target.files[0]);
    setPictureName(param.name)

    // let reader = new FileReader();
    // reader.get
    // console.log(param);
    console.log(param.name);
    // reader.readAsDataURL(param);
    // // setFilePath(URL.createObjectURL(param))
    // console.log("file path = " + filePath);
    // setFilePath(param);
    // // this.setState({
    // //   image: reader.result,
    // // });
    // console.log(reader);
  };
  const create = async () => {
    // const form =new FormData();
    // form.append("profile", file);
    // axios.all([
    //   axios.post(
    //     `${url}/upload-guide-picture`,
    //     form,
    //     {
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "multipart/form-data",
    //         // authorization: `JWT ${token}`,
    //       },
    //     }
    //   ), 
    //   axios.post(
    //     `${url}/create-guide`,
    //     {
    //       title: title,
    //       description: description,
    //       image: pictureName,
    //       // createdBy: user,
    //       // createdBy: "6435e3d119416fce34d108a0"
    //       // createdBy: user.lastName + user.firstName,
    //     },
    //     { headers: { "Content-Type": "application/json" } }
    //   )
    // ])
    // .then(axios.spread((obj1, obj2) => {
    //   // Both requests are now complete
    //   console.log("request upload "+obj1.data);
    //   console.log("request create "+obj2.data);
    // }));
    try {
      const form =new FormData();
      form.append("profile", file);
      await axios.post(
          `${url}/upload-guide-picture`,
          form,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              // authorization: `JWT ${token}`,
            },
          }
        );

      console.log("request upload picture made");
      console.log("request create guide started");
      const result = await axios.post(
        `${url}/create-guide`,
        {
          title: title,
          description: description,
          image: pictureName,
          // createdBy: user,
          // createdBy: "6435e3d119416fce34d108a0"
          // createdBy: user.lastName + user.firstName,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("request create guide made");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    // try {
      
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="text-center mx-auto max-w-md">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-gray-900">
              Create Guide
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block w-100 border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                      placeholder="Title"
                      onChange={(newText) => {
                        setTitle(newText);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    onChange={(newText) => {
                      setDescription(newText);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Guide photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-8 py-12">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-16 w-16 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    ></svg>
                    <div className="mt-6 flex text-base leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          // onChange={(filepath) => {
                          //   setFilePath(filepath);
                          // }}
                          onChange={fileSelectHandler}
                          // on
                        />
                      </label>
                      <p className="pl-2">or drag and drop</p>
                    </div>
                    <p className="text-sm leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="button"
            // type="submit"
            onClick={() => {
              create();
            }}
            className="rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGuide;
