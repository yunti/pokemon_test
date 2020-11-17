import React, { useState } from "react";

const SearchFilters = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-gray-800 xl:w-72">
      <div className="flex justify-between px-4 py-3 xl:hidden">
        <div className="relative max-w-xs w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-6 w-6 fill-current text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by keywords"
            className="block w-full bg-gray-900 text-white rounded-lg px-10 pr-4 py-3 focus:outline-none focus:bg-gray-300 focus:text-gray-900"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-4 inline-flex items-center ml-4 pl-3 pr-4 bg-gray-700 rounded-lg shadow focus:outline-none focus:shadow-outline hover:bg-gray-600"
        >
          <svg
            className="h-6 w-6 fill-current text-gray-500"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
          </svg>
          <span className="ml-1 text-white font-medium">Filters</span>
        </button>
      </div>
      <div className={`h-full ${isOpen ? "block" : "hidden"} xl:block`}>
        <form className="xl:flex xl:flex-col xl:justify-between xl:h-full">
          <div className="lg:flex xl:block xl:overflow-y-auto">
            <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full xl:border-t-0">
              <div className="flex flex-wrap -mx-2">
                <label
                  htmlFor=""
                  className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2"
                >
                  <span className="text-sm font-semibold text-gray-500">
                    Generation
                  </span>
                  <select
                    name=""
                    id="generation"
                    className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">etc...</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2"
                >
                  <span className="text-sm font-semibold text-gray-500">
                    Growth Rate
                  </span>
                  <select
                    name=""
                    id="bathrooms"
                    className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600"
                  >
                    <option value="">Fast</option>
                    <option value="">Medium</option>
                    <option value="">Slow</option>
                  </select>
                </label>
                <label className="block mt-4 w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                  <span className="text-sm font-semibold text-gray-500">
                    HP Range
                  </span>
                  <select
                    name=""
                    id="hpRange"
                    className="mt-1 form-select block w-full text-white shadow focus:bg-gray-600"
                  >
                    <option value="">Up to 250 HP</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="px-4 py-4 border-t border-l border-gray-900 lg:w-1/3 xl:w-full">
              <span className="block text-sm font-semibold text-gray-500">Colour</span>
              <div className="sm:flex lg:block lg:mt-0">
                <label className="mt-2 sm:w-1/4 flex items-center">
                  <input
                    className="form-radio bg-gray-900 focus:bg-gray-700"
                    type="radio"
                    name="generation"
                    value="Red"
                  />
                  <span className="ml-2 text-white">Red</span>
                </label>
                <label className="mt-2 sm:w-1/4 flex items-center">
                  <input
                    className="form-radio bg-gray-900 focus:bg-gray-700"
                    type="radio"
                    name="colour"
                    value="Blue"
                  />
                  <span className="ml-2 text-white">Blue</span>
                </label>
                <label className="mt-2 sm:w-1/4 flex items-center">
                  <input
                    className="form-radio bg-gray-900 focus:bg-gray-700"
                    type="radio"
                    name="Colour"
                    value="gold"
                  />
                  <span className="ml-2 text-white">Gold</span>
                </label>
                <label className="mt-2 sm:w-1/4 flex items-center">
                  <input
                    className="form-radio bg-gray-900 focus:bg-gray-700"
                    type="radio"
                    name="colour"
                    value="silver"
                  />
                  <span className="ml-2 text-white">Silver</span>
                </label>
              </div>
            </div>
            <div className="px-4 py-4 border-t border-l border-gray-900 lg:w-1/3 xl:w-full">
              <span className="block text-sm font-semibold text-gray-500">
                Pokemon Type
              </span>
              <div class="sm:flex sm:flex-wrap">
                <label
                  htmlFor=""
                  className="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full"
                >
                  <input
                    className="form-checkbox bg-gray-900 focus-bg-gray-700"
                    type="checkbox"
                    name="pokemonType"
                    value="Grass"
                  />
                  <span className="ml-2 text-white">Grass</span>
                </label>

                <label
                  htmlFor=""
                  className="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full"
                >
                  <input
                    className="form-checkbox bg-gray-900 focus-bg-gray-700"
                    type="checkbox"
                    name="pokemonType"
                    value="Poison"
                  />
                  <span className="ml-2 text-white">Poison</span>
                </label>
                <label
                  htmlFor=""
                  className="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full"
                >
                  <input
                    className="form-checkbox bg-gray-900 focus-bg-gray-700"
                    type="checkbox"
                    name="pokemonType"
                    value="Fire"
                  />
                  <span className="ml-2 text-white">Fire</span>
                </label>
                <label
                  htmlFor=""
                  className="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full"
                >
                  <input
                    className="form-checkbox bg-gray-900 focus-bg-gray-700"
                    type="checkbox"
                    name="pokemonType"
                    value="Water"
                  />
                  <span className="ml-2 text-white">Water</span>
                </label>
                <label
                  htmlFor=""
                  className="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full"
                >
                  <input
                    className="form-checkbox bg-gray-900 focus-bg-gray-700"
                    type="checkbox"
                    name="pokemonType"
                    value="flying"
                  />
                  <span className="ml-2 text-white">Flying</span>
                </label>
                <label
                  htmlFor=""
                  className="mt-3 flex items-center sm:w-1/4 lg:w-full"
                >
                  <input
                    className="form-checkbox bg-gray-900 focus-bg-gray-700"
                    type="checkbox"
                    name="pokemonType"
                    value="Electric"
                  />
                  <span className="ml-2 text-white">Electric</span>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 px-4 py-4 sm:text-right">
            <button className="sm:w-auto inline-block w-full bg-teal-400 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg focus:outline-none focus:bg-indigo-300 xl:block xl:w-full">
              Update Results
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchFilters;

