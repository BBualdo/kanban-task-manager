"use client";

import { BoardColumnInterface } from "@/ts/types";
import { useState } from "react";

const ColumnInput = ({
  isLight,
  name,
  remove,
  currentColumn,
  update,
}: {
  isLight: boolean;
  name: string;
  remove: (columnToDelete: BoardColumnInterface) => void;
  currentColumn: BoardColumnInterface;
  update: (
    event: React.ChangeEvent<HTMLInputElement>,
    columnToUpdate: BoardColumnInterface
  ) => void;
}) => {
  const [inputValue, setInputValue] = useState(name);
  const [isEmpty, setIsEmpty] = useState(inputValue == "");

  return (
    <div className="relative flex items-center justify-between gap-4">
      <input
        value={inputValue}
        name="column-name"
        type="text"
        placeholder="e.g. Todo"
        // maxLength={25}
        autoComplete="off"
        onChange={(event) => {
          setIsEmpty(false);
          setInputValue(event.target.value);
        }}
        onBlur={(event) => update(event, currentColumn)}
        className={`${
          isLight
            ? "bg-white text-black border-lines_light"
            : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
        } ${
          isEmpty && "border-red focus:border-red"
        } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300 flex-1`}
      />
      {isEmpty && (
        <p className="absolute right-12 p-lg text-red">Can&apos;t be empty</p>
      )}
      <svg
        onClick={() => remove(currentColumn)}
        className="fill-medium_grey hover:fill-red transition-all duration-200 cursor-pointer"
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fillRule="evenodd">
          <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
          <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
        </g>
      </svg>
    </div>
  );
};

export default ColumnInput;
