"use client";

import { TaskOptionsProps } from "@/ts/types";
import { useEffect, useRef } from "react";

const TaskOptions = ({
  onClose,
  isLight,
  openDeleteTaskModal,
  openEditTaskModal,
}: TaskOptionsProps) => {
  const optionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={optionsRef}
      className={`absolute w-[192px] top-20 -right-16 ${
        isLight ? "bg-very_dark_grey" : "bg-white"
      } p-4 flex flex-col items-start gap-4 rounded-[4px]`}
    >
      <button
        onClick={openEditTaskModal}
        className={`text-medium_grey ${
          isLight ? "hover:text-white" : "hover:text-black"
        } transition-all duration-300`}
      >
        Edit Task
      </button>
      <button
        onClick={openDeleteTaskModal}
        className="text-red hover:text-red_hover transition-all duration-300"
      >
        Delete Task
      </button>
    </div>
  );
};

export default TaskOptions;
