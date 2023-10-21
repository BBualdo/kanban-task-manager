"use client";

import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";

const Feed = () => {
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div
      className={`${
        isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
      } flex-1 transition-all duration-200`}
    >
      {isEmpty && (
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h2 className="text-medium_grey">
            This board is empty. Create a new column to get started.
          </h2>
          <button className="btn btn-primary-lg px-[18px]">
            + Add New Column
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
