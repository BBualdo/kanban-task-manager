import React, { useRef } from "react";

import DUMMY_BOARDS from "@/app/data/data";
import { BoardInterface } from "@/ts/types";

const AddBoard = (props: { isLight: boolean; onClose: () => void }) => {
  const addNewBoard = (board: BoardInterface) => {
    DUMMY_BOARDS.push(board);
    props.onClose();
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addNewBoard({
        id: DUMMY_BOARDS.length,
        name: boardNameInput.current!.value,
      });
    } else {
      return;
    }
  };

  const boardNameInput = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={`${
        props.isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px]`}
    >
      <h2 className={`${props.isLight ? "text-black" : "text-white"}`}>
        Add New Board
      </h2>
      <div className="flex flex-col mt-6 gap-2">
        <label
          htmlFor="board-name"
          className={`${
            props.isLight ? "text-medium_grey" : "text-white"
          } text-[15px] font-bold leading-[19px]`}
        >
          Name
        </label>
        <input
          onKeyDown={onKeyDownHandler}
          id="board-name"
          ref={boardNameInput}
          type="text"
          placeholder="e.g. Web Design"
          className={`${
            props.isLight
              ? "bg-white text-black border-lines_light"
              : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
          } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300`}
        />
        {/* <button
          className={`btn btn-secondary ${
            props.isLight ? "" : "bg-white hover:bg-white/80"
          }`}
        >
          + Add New Column
        </button> */}
        <button
          onClick={() =>
            addNewBoard({
              id: DUMMY_BOARDS.length,
              name: boardNameInput.current!.value,
            })
          }
          className="btn btn-primary-sm mt-6"
        >
          Create New Board
        </button>
      </div>
    </div>
  );
};

export default AddBoard;
