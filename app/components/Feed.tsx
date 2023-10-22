"use client";
import { v4 as uuidv4 } from "uuid";

import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import Column from "./Column";

const Feed = () => {
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );
  const isSidebarShown = useAppSelector(
    (state) => state.sidebarReducer.value.isShown
  );

  const selectedBoard = useAppSelector(
    (state) => state.boardReducer.value.selectedBoard
  );

  const [isEmpty, setIsEmpty] = useState(false);

  const columns = selectedBoard.columns!.map((column) => (
    <Column key={uuidv4()} columnName={column.name} />
  ));

  return (
    <div
      className={`${
        isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
      } flex-1 transition-all duration-300 ${
        isSidebarShown ? "ml-[300px]" : ""
      }`}
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
      {!isEmpty && (
        <div className="pt-6 pb-13 px-6 flex gap-6 overflow-scroll">
          {/* Columns render dynamically */}
          {columns}
          <button className="bg-medium_grey/10 w-[282px] h-[814px] rounded-[6px] cursor-pointer">
            <h1 className="text-medium_grey">+ New Column</h1>
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
