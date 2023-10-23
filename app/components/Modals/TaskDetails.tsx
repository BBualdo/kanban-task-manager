import { ModalsProps } from "@/ts/types";
import React from "react";

const TaskDetails = ({ isLight, onClose }: ModalsProps) => {
  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px]`}
    >
      This is task details modal
    </div>
  );
};

export default TaskDetails;
