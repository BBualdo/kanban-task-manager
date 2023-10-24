import { useAppSelector } from "@/redux/store";
import { TaskProps } from "@/ts/types";
import React from "react";

const Task = ({ selectTask, taskName, subtasks }: TaskProps) => {
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  let completedAmount = 0;

  for (const subtask of subtasks) {
    if (subtask.isCompleted) {
      completedAmount += 1;
    }
  }

  return (
    <div
      onClick={selectTask}
      className={`group py-6 px-4 ${
        isLightTheme ? "bg-white" : "bg-dark_grey"
      } flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10 cursor-pointer transition-all duration-300`}
    >
      <h3
        className={`${
          isLightTheme ? "text-black" : "text-white"
        } group-hover:text-purple transition-all duration-300`}
      >
        {taskName}
      </h3>
      <p className="p-md text-medium_grey">
        {completedAmount} of {subtasks.length} subtasks
      </p>
    </div>
  );
};

export default Task;
