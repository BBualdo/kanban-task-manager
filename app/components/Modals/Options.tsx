"use client";

import { OptionsProps } from "@/ts/types";
import { useEffect, useRef } from "react";

const Options = ({
  onClose,
  isLight,
  openDeleteBoardModal,
  openEditBoardModal,
}: OptionsProps) => {
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
      className={`absolute w-[192px] -bottom-[80px] right-6 ${
        isLight ? "bg-very_dark_grey" : "bg-white"
      } p-4 flex flex-col items-start gap-4 rounded-[4px]`}
    >
      <button
        onClick={openEditBoardModal}
        className={`text-medium_grey ${
          isLight ? "hover:text-white" : "hover:text-black"
        } transition-all duration-300`}
      >
        Edit Board
      </button>
      <button
        onClick={openDeleteBoardModal}
        className="text-red hover:text-red_hover transition-all duration-300"
      >
        Delete Board
      </button>
    </div>
  );
};

export default Options;
