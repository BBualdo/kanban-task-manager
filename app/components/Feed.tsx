import { v4 as uuidv4 } from "uuid";

import { useAppSelector } from "@/redux/store";
import React from "react";
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

  const columnElement = selectedBoard.columns!.map((column) => (
    <Column key={uuidv4()} columnName={column.name} tasks={column.tasks} />
  ));

  return (
    <div
      className={`${
        isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
      } flex-1 transition-all duration-300 ${
        isSidebarShown ? "ml-[300px]" : ""
      } h-screen`}
    >
      {selectedBoard.columns.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h2 className="text-medium_grey">
            This board is empty. Create a new column to get started.
          </h2>
          <button className="btn btn-primary-lg px-[18px]">
            + Add New Column
          </button>
        </div>
      ) : (
        <div className="pt-6 pb-13 px-6 flex gap-6">
          {columnElement}
          <button
            className={`group ${
              isLightTheme ? "bg-medium_grey/10" : "bg-dark_grey/10"
            } rounded-[6px] cursor-pointer mt-10 min-w-[282px]`}
          >
            <h1 className="text-medium_grey group-hover:text-purple transition-all duration-300">
              + New Column
            </h1>
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
