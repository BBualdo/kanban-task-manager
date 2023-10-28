"use client";

import {
  BoardColumnInterface,
  ModalsProps,
  SubtaskInterface,
  TaskInterface,
} from "@/ts/types";
import SubtaskInputsList from "./SubtaskInputsList";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Dropdown from "./Dropdown";

import data from "../../data/data.json";
import { switchBoard } from "@/redux/features/selected-board-slice";

const AddTask = ({ isLight, onClose }: ModalsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const taskNameInput = useRef<HTMLInputElement | null>(null);
  const taskDescriptionInput = useRef<HTMLTextAreaElement | null>(null);

  const [subtasksToAdd, setSubtasksToAdd] = useState<SubtaskInterface[] | []>([
    { title: "Subtask 1", isCompleted: false },
    { title: "Subtask 2", isCompleted: false },
  ]);

  const statuses = selectedBoard.columns;

  const [selectedStatus, setSelectedStatus] = useState(statuses[0].name);

  const changeStatus = (status: string) => {
    setSelectedStatus(status);
  };

  const addNewTask = () => {
    const newTask: TaskInterface = {
      id: uuidv4(),
      title: taskNameInput.current!.value || "New Task",
      description: taskDescriptionInput.current?.value || "",
      status: selectedStatus,
      subtasks: subtasksToAdd,
    };

    if (subtasksToAdd.some((subtask) => subtask.title == "")) {
      return;
    } else {
      const updatedColumns = selectedBoard.columns.map((column) => {
        if (column.name === selectedStatus) {
          return {
            ...column,
            tasks: [...column.tasks, newTask],
          };
        } else {
          return column;
        }
      });

      const updatedBoard = {
        ...selectedBoard,
        columns: updatedColumns,
      };

      data.boards.splice(data.boards.indexOf(selectedBoard), 1, updatedBoard);
      dispatch(switchBoard(updatedBoard));
      onClose();
    }
  };

  const addNewSubtask = () => {
    const newSubtask: SubtaskInterface = {
      title: "",
      isCompleted: false,
    };
    setSubtasksToAdd((prevSubtasks) => [...prevSubtasks, newSubtask]);
  };

  const removeNewSubtask = (subtaskToDelete: SubtaskInterface) => {
    setSubtasksToAdd((prevSubtasks) =>
      prevSubtasks.filter((subtask) => subtask !== subtaskToDelete)
    );
  };

  const updateSubtaskTitle = (
    event: React.ChangeEvent<HTMLInputElement>,
    subtaskToUpdate: SubtaskInterface
  ) => {
    const newTitle = event.target.value;

    setSubtasksToAdd((prevSubtasks) => {
      return prevSubtasks.map((subtask) => {
        if (subtask === subtaskToUpdate) {
          return { ...subtask, title: newTitle };
        } else {
          return subtask;
        }
      });
    });
  };

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] md:p-8 xs:p-6 xs:w-auto md:w-[480px]`}
    >
      <h2 className={`${isLight ? "text-black" : "text-white"}`}>
        Add New Task
      </h2>
      <div className="flex flex-col mt-6 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="task-name"
            className={`${isLight ? "text-medium_grey" : "text-white"} p-md`}
          >
            Title
          </label>
          <input
            id="task-name"
            type="text"
            ref={taskNameInput}
            placeholder="e.g. Take coffee break"
            className={`${
              isLight
                ? "bg-white text-black border-lines_light"
                : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
            } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="task-description"
            className={`${isLight ? "text-medium_grey" : "text-white"} p-md`}
          >
            Description
          </label>
          <textarea
            ref={taskDescriptionInput}
            id="task-description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            className={`${
              isLight
                ? "bg-white text-black border-lines_light"
                : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
            } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300 xs:h-[86px] md:h-[112px] resize-none`}
          />
        </div>
        <SubtaskInputsList
          isLight={isLight}
          subtasks={subtasksToAdd}
          addNew={addNewSubtask}
          remove={removeNewSubtask}
          update={updateSubtaskTitle}
        />
        <Dropdown
          isLight={isLight}
          statuses={statuses}
          selectedStatus={selectedStatus}
          changeStatus={changeStatus}
        />
        <button onClick={addNewTask} className="btn btn-primary-sm">
          Create Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
