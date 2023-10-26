"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { BoardColumnInterface, TaskInterface } from "@/ts/types";
import Dropdown from "./Dropdown";
import SubtasksList from "../SubtasksList";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { switchBoard } from "@/redux/features/selected-board-slice";
import { switchTask } from "@/redux/features/selected-task-slice";

import data from "../../data/data.json";

const TaskDetails = ({
  isLight,
  statuses,
}: {
  isLight: boolean;
  statuses: BoardColumnInterface[];
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedTask = useAppSelector(
    (state) => state.selectedTaskReducer.value.selectedTask
  );

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const [selectedStatus, setSelectedStatus] = useState(selectedTask!.status);

  const changeStatus = (status: string) => {
    setSelectedStatus(status);

    const updatedTask: TaskInterface = {
      ...selectedTask!,
      status: status,
    };

    const updatedColumns = selectedBoard.columns.map((column) => {
      if (column.name === selectedTask!.status) {
        const updatedTasks = column.tasks.filter(
          (task) => task.id !== selectedTask!.id
        );
        return { ...column, tasks: updatedTasks };
      } else if (column.name === status) {
        return { ...column, tasks: [...column.tasks, updatedTask] };
      } else {
        return column;
      }
    });

    const newBoard = { ...selectedBoard, columns: updatedColumns };

    const updatedBoards = data.boards.map((board) => {
      if (board.id === newBoard.id) {
        return newBoard;
      } else {
        return board;
      }
    });

    data.boards = updatedBoards;

    dispatch(switchTask(updatedTask));
    dispatch(switchBoard(newBoard));
  };

  let completedAmount = 0;

  for (const subtask of selectedTask!.subtasks) {
    if (subtask.isCompleted) {
      completedAmount += 1;
    }
  }

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px] flex flex-col gap-6`}
    >
      <div className="flex items-center justify-between">
        <h2
          className={`${isLight ? "text-black" : "text-white"} max-w-[360px]`}
        >
          {selectedTask!.title}
        </h2>
        <svg
          className={`fill-medium_grey ${
            isLight ? "hover:fill-black" : "hover:fill-white"
          } transition-all duration-200 cursor-pointer`}
          width="5"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="evenodd">
            <circle cx="2.308" cy="2.308" r="2.308" />
            <circle cx="2.308" cy="10" r="2.308" />
            <circle cx="2.308" cy="17.692" r="2.308" />
          </g>
        </svg>
      </div>
      <p className="p-lg text-medium_grey">{selectedTask?.description}</p>
      <div className="flex flex-col gap-4">
        <p className={`p-md ${isLight ? "text-medium_grey" : "text-white"}`}>
          Subtasks ({completedAmount} of {selectedTask!.subtasks.length})
        </p>
        <SubtasksList subtasks={selectedTask!.subtasks} />
      </div>
      <div className="flex flex-col gap-2">
        <p className={`p-md ${isLight ? "text-medium_grey" : "text-white"}`}>
          Current Status
        </p>
        <Dropdown
          isLight={isLight}
          statuses={statuses}
          selectedStatus={selectedStatus}
          changeStatus={changeStatus}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
