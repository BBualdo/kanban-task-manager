"use client";

import { DropdownProps } from "@/ts/types";
import React, { useState } from "react";

const Dropdown = ({ isLight, status }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(status);

  return (
    <div
      onClick={() => setIsOpen((prevState) => !prevState)}
      className="relative w-full border-2 border-medium_grey/25 hover:border-purple rounded-[4px] py-2 px-4 cursor-pointer transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <p className={`p-lg ${isLight ? "text-black" : "text-white"}`}>
          {selectedOption}
        </p>
        <svg
          className={`${isOpen && "rotate-180"} transition-all duration-300`}
          width="10"
          height="7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
        </svg>
      </div>
      {isOpen && (
        <div
          className={`absolute top-12 left-0 w-full p-4 rounded-[8px] ${
            isLight ? "bg-white text-black" : "bg-very_dark_grey text-white"
          }`}
        >
          <ul className="flex flex-col gap-2">
            <li className="p-lg text-medium_grey hover:text-purple transition-all duration-200">
              Todo
            </li>
            <li className="p-lg text-medium_grey hover:text-purple transition-all duration-200">
              Doing
            </li>
            <li className="p-lg text-medium_grey hover:text-purple transition-all duration-200">
              Done
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
