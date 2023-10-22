import { TaskProps } from "@/ts/types";
import React from "react";

const Task = ({ taskName, subtasks }: TaskProps) => {
  return (
    <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10 cursor-pointer">
      <h3 className="text-black">{taskName}</h3>
      <p className="p-md text-medium_grey">X of {subtasks.length} subtasks</p>
    </div>
  );
};

export default Task;
