import React, { useRef } from "react";

import { ModalsProps, BoardInterface } from "@/ts/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { switchBoard } from "@/redux/features/board-slice";

import data from "../../data/data.json";

const AddBoard = ({ isLight, onClose }: ModalsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const boardNameInput = useRef<HTMLInputElement | null>(null);

  const addNewBoard = (board: BoardInterface) => {
    data.boards.push(board);
    dispatch(switchBoard(board));
    onClose();
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addNewBoard({
        name: boardNameInput.current!.value,
        columns: [],
      });
    } else {
      return;
    }
  };

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px]`}
    >
      <h2 className={`${isLight ? "text-black" : "text-white"}`}>
        Add New Board
      </h2>
      <div className="flex flex-col mt-6 gap-2">
        <label
          htmlFor="board-name"
          className={`${
            isLight ? "text-medium_grey" : "text-white"
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
            isLight
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
              name: boardNameInput.current?.value
                ? boardNameInput.current.value
                : `New Board #${data.boards.length + 1}`,
              columns: [],
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
