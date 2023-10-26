"use client";

import { BoardColumnInterface, DropdownProps } from "@/ts/types";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const Dropdown = ({
  isLight,
  statuses,
  selectedStatus,
  changeStatus,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const availableOptions = statuses.map((option: BoardColumnInterface) => {
    return (
      <li
        key={uuidv4()}
        onClick={() => changeStatus(option.name)}
        className="p-lg text-medium_grey hover:text-purple transition-all duration-200"
      >
        {option.name}
      </li>
    );
  });

  return (
    <div
      onClick={() => setIsOpen((prevState) => !prevState)}
      className="relative w-full border-2 border-medium_grey/25 hover:border-purple rounded-[4px] py-2 px-4 cursor-pointer transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <p className={`p-lg ${isLight ? "text-black" : "text-white"}`}>
          {selectedStatus}
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
          <ul className="flex flex-col gap-2">{availableOptions}</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
