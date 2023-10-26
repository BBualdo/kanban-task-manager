"use client";

import { useState } from "react";

import { ModalsProps, BoardInterface, BoardColumnInterface } from "@/ts/types";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { switchBoard } from "@/redux/features/selected-board-slice";

import data from "../../data/data.json";

import ColumnInputsList from "./ColumnInputsList";

const EditBoard = ({ isLight, onClose }: ModalsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const [editedBoard, setEditedBoard] = useState(selectedBoard);

  const [columnsToEdit, setColumnsToEdit] = useState<
    BoardColumnInterface[] | []
  >(selectedBoard.columns);

  const saveChanges = () => {
    if (columnsToEdit.some((column) => column.name == "")) {
      return;
    } else if (editedBoard.name == "") {
      editedBoard.name = `New Board #${data.boards.indexOf(selectedBoard)}`;
    }

    const updatedBoard: BoardInterface = {
      ...editedBoard,
      columns: columnsToEdit,
    };

    const boardIndex = data.boards.findIndex(
      (board: BoardInterface) => board.id == selectedBoard.id
    );

    if (boardIndex !== -1) {
      const newBoards = [...data.boards];
      newBoards[boardIndex] = updatedBoard;
      data.boards = newBoards;
      dispatch(switchBoard(updatedBoard));
      onClose();
    }
  };

  const addNewColumn = () => {
    const newColumn: BoardColumnInterface = {
      name: "",
      tasks: [],
    };
    setColumnsToEdit((prevColumns) => [...prevColumns, newColumn]);
  };

  const removeNewColumn = (columnToDelete: BoardColumnInterface) => {
    setColumnsToEdit((prevColumns) =>
      prevColumns.filter((column) => column !== columnToDelete)
    );
  };

  const updateColumnName = (
    event: React.ChangeEvent<HTMLInputElement>,
    columnToUpdate: BoardColumnInterface
  ) => {
    const newName = event.target.value;

    setColumnsToEdit((prevColumns) => {
      return prevColumns.map((column) => {
        if (column === columnToUpdate) {
          return { ...column, name: newName };
        } else {
          return column;
        }
      });
    });
  };

  const updateBoardName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    setEditedBoard((prevBoard) => ({
      ...prevBoard,
      name: newName,
    }));
  };

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px]`}
    >
      <h2 className={`${isLight ? "text-black" : "text-white"}`}>Edit Board</h2>
      <div className="flex flex-col mt-6 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="board-name"
            className={`${isLight ? "text-medium_grey" : "text-white"} p-md`}
          >
            Board Name
          </label>
          <input
            value={editedBoard.name}
            id="board-name"
            onChange={updateBoardName}
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
          columns={columnsToEdit}
          addNew={addNewColumn}
          remove={removeNewColumn}
          update={updateColumnName}
        />
        <button onClick={saveChanges} className="btn btn-primary-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditBoard;
