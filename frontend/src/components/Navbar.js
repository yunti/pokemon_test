import React from "react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClick = (e) => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center xl:flex-shrink-0 xl:bg-white">
      <div className="flex items-center justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5">
        <div>
          <p className="h-8 text-gray-200 text-3xl font-bold">PokemonDB 🐱</p>
          {/*<img className="h-8" src={logo} alt="Pokebase" />*/}
        </div>
        <div className="sm:hidden">
          <button
            onClick={onClick}
            type="button"
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } sm:flex sm:block xl:flex-1 xl:justify-between`}
      >
        <div className="hidden xl:block px-6">
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
              className="block w-full border border-transparent bg-gray-200 text-gray-900 rounded-lg px-10 pr-4 py-3 focus:outline-none focus:bg-white focus:text-gray-700 focus:border-gray-700"
            />
          </div>
        </div>
        <div className="sm:flex sm:items-center">
          <div className="px-2 pt-2 sm:flex sm:p-0">
            {" "}
            <a
              href="example.com"
              className="block px-2 py-2 text-white font-semibold hover:bg-gray-800 rounded xl:text-gray-900 xl:hover:bg-gray-200"
            >
              Pokemon data
            </a>
            <a
              href="example.com"
              className="mt-1 block px-2 py-2 text-white font-semibold hover:bg-gray-800 rounded sm:mt-0 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200"
            >
              Games
            </a>
            <a
              href="example.com"
              className="mt-1 block px-2 py-2 text-white font-semibold hover:bg-gray-800 rounded sm:mt-0 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200 mr-2"
            >
              Mechanics
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
