import React, { useRef, useState } from "react";

import { ModalsProps, BoardInterface, BoardColumnInterface } from "@/ts/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { switchBoard } from "@/redux/features/selected-board-slice";

import data from "../../data/data.json";
import ColumnInputsList from "./ColumnInputsList";

const AddBoard = ({ isLight, onClose }: ModalsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const boardNameInput = useRef<HTMLInputElement | null>(null);

  const [columnsToAdd, setColumnsToAdd] = useState<BoardColumnInterface[] | []>(
    [
      { name: "Todo", tasks: [] },
      { name: "Doing", tasks: [] },
    ]
  );

  const addNewBoard = () => {
    const newBoard: BoardInterface = {
      name:
        boardNameInput.current!.value || `New Board #${data.boards.length + 1}`,
      columns: columnsToAdd,
    };
    data.boards.push(newBoard);
    dispatch(switchBoard(newBoard));
    onClose();
  };

  const addNewColumn = () => {
    const newColumn: BoardColumnInterface = {
      name: "",
      tasks: [],
    };
    setColumnsToAdd((prevColumns) => [...prevColumns, newColumn]);
  };

  const removeNewColumn = (columnToDelete: BoardColumnInterface) => {
    setColumnsToAdd((prevColumns) =>
      prevColumns.filter((column) => column !== columnToDelete)
    );
  };

  const updateColumnName = (
    event: React.ChangeEvent<HTMLInputElement>,
    columnToUpdate: BoardColumnInterface
  ) => {
    const newName = event.target.value;

    setColumnsToAdd((prevColumns) => {
      return prevColumns.map((column) => {
        if (column === columnToUpdate) {
          return { ...column, name: newName };
        } else {
          return column;
        }
      });
    });
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addNewBoard();
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
      <div className="flex flex-col mt-6 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="board-name"
            className={`${isLight ? "text-medium_grey" : "text-white"} p-md`}
          >
            Board Name
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
        </div>

        <ColumnInputsList
          isLight={isLight}
          columns={columnsToAdd}
          addNew={addNewColumn}
          remove={removeNewColumn}
          update={updateColumnName}
        />
        <button
          onClick={() => addNewBoard()}
          className="btn btn-primary-sm mt-6"
        >
          Create New Board
        </button>
      </div>
    </div>
  );
};

export default AddBoard;
