import React, { useState } from "react";
import axios from "axios";
import url from "../utils/url";
import { v4 as uuid } from "uuid";

const CreateGuide = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fileSelectHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const createGuide = async () => {
      
      try {
      const formData = new FormData();
      formData.append("profile", file);

      const uploadResponse = await axios.post(
          `${url}/upload-guide-picture`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      const { pictureName } = uploadResponse.data;
      console.log("Title:", title);
      console.log("Description:", description);
      console.log("Picture Name:", pictureName);
      
      const guideData = {
        title: title,
        description: description,
        image: pictureName,
        createdBy: "Admin",
      };
      
      const createResponse = await axios.post(`${url}/create-guide`, guideData);

      console.log(createResponse.data);
    } catch (error) {
      console.log(error);
    }
};

return (
    <div className="text-center mx-auto max-w-md">
      <form>
        {/* Form fields */}
        {/* ... */}
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
                // autoComplete="title"
                className="block w-100 border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                placeholder="Title"
                onChange={(event) => {
                    setTitle(event.target.value);
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
              onChange={(event) => {
                setDescription(event.target.value);
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
              {/* File input */}
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={fileSelectHandler}
              />
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
              </label>
              {/* File name display */}
              {file && <p className="pl-2">{file.name}</p>}
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
            onClick={createGuide}
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
