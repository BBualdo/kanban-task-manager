import { ColumnProps } from "@/ts/types";
import React from "react";

const Column = ({ columnName }: ColumnProps) => {
  return (
    <div className="flex flex-col gap-6 min-w-[280px]">
      <h4 className="uppercase text-medium_grey">{columnName}</h4>
      <div className="flex flex-col gap-5">
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
        <div className="py-6 px-4 bg-white flex flex-col gap-2 rounded-[8px] shadow-[0_4px_6px_0] shadow-dark_grey/10">
          <h3 className="text-black">Task Title</h3>
          <p className="p-md text-medium_grey">X of X subtasks</p>
        </div>
      </div>
    </div>
  );
};

export default Column;
