import React from "react";

const PokemonCard = (props) => (
  <div className="">
    <div className="relative pb-5/6 bg-white">
      <img
        className="absolute h-full rounded-lg w-full object-cover shadow-md"
        src={props.image}
        alt={props.name}
      />
    </div>
    <div className="relative px-4 -mt-16">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-baseline">
          <span className="inline-block bg-pink-200 text-pink-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            1st Gen
          </span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {props.type}
          </div>
        </div>
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
          {props.name}
        </h4>
        <div className="mt-1">
          {props.hp}
          <span className="text-gray-600 text-sm"> HP</span>
        </div>
        <div className="mt-2 flex items-center">
          {Array.from({ length: 5 }, (value, index) => (
            <svg
              key={index}
              className={
                "h-4 w-4 fill-current " +
                ((index*10) < props.attack ? "text-pink-600" : "text-gray-300")
              }
              viewBox="0 0 24 24"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 text-sm">
            {props.attack} Attack
          </span>
        </div>
      </div>
    </div>
  </div>
);
export default PokemonCard;

