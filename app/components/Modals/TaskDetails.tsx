"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  BoardColumnInterface,
  SubtaskInterface,
  TaskInterface,
} from "@/ts/types";
import Dropdown from "./Dropdown";
import SubtasksList from "../SubtasksList";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { switchBoard } from "@/redux/features/selected-board-slice";
import { switchTask } from "@/redux/features/selected-task-slice";

import data from "../../data/data.json";
import TaskOptions from "./TaskOptions";
import { showEditTaskModal } from "@/redux/features/edit-task-slice";
import { showDeleteTaskModal } from "@/redux/features/confirm-delete-task-slice";
import { showTaskDetailsModal } from "@/redux/features/task-details-slice";

const TaskDetails = ({
  isLight,
  statuses,
  onClose,
}: {
  isLight: boolean;
  statuses: BoardColumnInterface[];
  onClose: () => void;
}) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const showMenu = () => {
    setIsMenuShown(true);
  };

  const hideMenu = () => {
    setIsMenuShown(false);
  };

  const openEditTaskModal = () => {
    dispatch(showEditTaskModal(true));
    dispatch(showTaskDetailsModal(false));
  };

  const openDeleteTaskModal = () => {
    dispatch(showDeleteTaskModal(true));
    dispatch(showTaskDetailsModal(false));
  };

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
        if (selectedTask!.status === updatedTask.status) {
          return { ...column, tasks: [...updatedTasks, updatedTask] };
        } else {
          return { ...column, tasks: updatedTasks };
        }
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
    onClose();
  };

  const toggleCompleted = (subtaskToToggle: SubtaskInterface) => {
    const newSubtask: SubtaskInterface = {
      ...subtaskToToggle,
      isCompleted: !subtaskToToggle.isCompleted,
    };

    const updatedSubtasks: SubtaskInterface[] = selectedTask!.subtasks.map(
      (subtask) => {
        if (subtask.title === subtaskToToggle.title) {
          return newSubtask;
        } else {
          return subtask;
        }
      }
    );

    const updatedTask: TaskInterface = {
      ...selectedTask!,
      subtasks: updatedSubtasks,
    };

    const updatedColumns = selectedBoard.columns.map((column) => {
      if (column.name === selectedTask!.status) {
        const updatedTasks = column.tasks.filter(
          (task) => task.id !== selectedTask!.id
        );
        return { ...column, tasks: [...updatedTasks, updatedTask] };
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

    dispatch(switchBoard(newBoard));
    dispatch(switchTask(updatedTask));
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
      } z-50 rounded-[6px] md:p-8 xs:p-6 xs:w-auto md:w-[480px] flex flex-col gap-6 relative`}
    >
      <div className="flex items-center justify-between gap-4">
        <h2
          className={`${
            isLight ? "text-black" : "text-white"
          } xs:max-w-[276px] md:max-w-[360px]`}
        >
          {selectedTask!.title}
        </h2>
        <svg
          onClick={showMenu}
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
      <p className="p-lg text-medium_grey xs:max-md:max-w-[296px]">
        {selectedTask?.description}
      </p>
      <div className="flex flex-col gap-4">
        <p className={`p-md ${isLight ? "text-medium_grey" : "text-white"}`}>
          Subtasks ({completedAmount} of {selectedTask!.subtasks.length})
        </p>
        <SubtasksList
          subtasks={selectedTask!.subtasks}
          toggleCompleted={toggleCompleted}
        />
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
      {isMenuShown && (
        <TaskOptions
          onClose={hideMenu}
          isLight={isLight}
          openDeleteTaskModal={openDeleteTaskModal}
          openEditTaskModal={openEditTaskModal}
        />
      )}
    </div>
  );
};

export default TaskDetails;
