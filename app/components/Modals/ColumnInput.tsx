import React from "react";

const ColumnInput = ({ isLight, name }: { isLight: boolean; name: string }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <input
        value={name}
        id="column-name"
        type="text"
        placeholder="e.g. Todo"
        className={`${
          isLight
            ? "bg-white text-black border-lines_light"
            : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
        } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300 flex-1`}
      />
      <svg
        className={`${
          isLight ? "hover:fill-black" : "hover:fill-white"
        } transition-all duration-200 cursor-pointer fill-medium_grey`}
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
