import { useAppSelector } from "@/redux/store";
import { SubtaskInterface } from "@/ts/types";
import React from "react";

const Subtask = ({ title, isCompleted }: SubtaskInterface) => {
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  return (
    <div
      className={`w-full p-3 ${
        isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
      } rounded-[4px]`}
    >
      <label className="flex items-center gap-4 cursor-pointer">
        <input
          name="subtask-checkbox"
          className="checkbox"
          checked={isCompleted}
          type="checkbox"
        />
        <p
          className={`p-md ${
            isCompleted
              ? "text-medium_grey/50 line-through"
              : isLightTheme
              ? "text-black"
              : "text-white"
          }`}
        >
          {title}
        </p>
      </label>
    </div>
  );
};

export default Subtask;
