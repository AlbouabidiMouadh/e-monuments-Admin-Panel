import React from "react";

const CreateGuide = () => {
  return (
    <div class="text-center mx-auto max-w-md">
      <form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-xl font-semibold leading-7 text-gray-900">
        Create Guide
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-lg font-medium leading-6 text-gray-900">
            Title
          </label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="username"
                id="username"
                autocomplete="username"
                class="block w-100 border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                placeholder="Title"
              />
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-lg font-medium leading-6 text-gray-900">
            Description
          </label>
          <div class="mt-2">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
            ></textarea>
          </div>
        </div>
        <div class="col-span-full">
          <label for="cover-photo" class="block text-lg font-medium leading-6 text-gray-900">
            Guide photo
          </label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-8 py-12">
            <div class="text-center">
              <svg
                class="mx-auto h-16 w-16 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
              </svg>
              <div class="mt-6 flex text-base leading-6 text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-2">or drag and drop</p>
              </div>
              <p class="text-sm leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 flex items-center justify-end gap-x-6">
    <button
      type="button"
      class="text-lg font-semibold leading-6 text-gray-900"
    >
      Cancel
    </button>
    <button
      type="submit"
      class="rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Save
    </button>
  </div>
</form>

    </div>
  );
};

export default CreateGuide;
