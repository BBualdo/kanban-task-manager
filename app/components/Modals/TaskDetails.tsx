import { useAppSelector } from "@/redux/store";
import { ModalsProps } from "@/ts/types";
import React from "react";
import Dropdown from "./Dropdown";
import SubtasksList from "../SubtasksList";

const TaskDetails = ({ isLight }: ModalsProps) => {
  const selectedTask = useAppSelector(
    (state) => state.selectedTaskReducer.value.selectedTask
  );

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
          Subtasks (x of {selectedTask!.subtasks.length})
        </p>
        <SubtasksList subtasks={selectedTask!.subtasks} />
      </div>
      <div className="flex flex-col gap-2">
        <p className={`p-md ${isLight ? "text-medium_grey" : "text-white"}`}>
          Current Status
        </p>
        <Dropdown isLight={isLight} status={selectedTask!.status} />
      </div>
    </div>
  );
};

export default TaskDetails;
