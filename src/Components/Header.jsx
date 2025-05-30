import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="font-bold text-xl flex flex-col text-gray-700 ">
        <span>The</span>
        <span>Organic</span>
        <span>Food</span>
      </div>
      <nav>
        <ul className="text-gray-800 gap-6  h-fit flex flex-row ">
          <li>
            <a className=" flex  items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100">
              <span className="pr-2 w-24 text-center">About Us</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a className="flex items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100">
              <span className="pr-2 w-33 text-center">What We Do</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a className="flex  items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100">
              <span className="pr-2 w-30 text-center">Core Issues</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a className="flex  items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100">
              <span className="pr-2 w-15 text-center">News</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a className="flex  items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100">
              <span className="pr-2 w-45 text-center">Learn and Engage</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <span className="bg-blue-950 font-medium text-white p-3.5 border-2 border-blue-950 px-5 rounded-full hover:bg-white hover:text-blue-950 cursor-pointer transition-all ease-in-out duration-100">
              Start Here
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
