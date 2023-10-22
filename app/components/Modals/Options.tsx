import { OptionsProps } from "@/ts/types";
import React, { useEffect, useRef } from "react";

const Options = ({ onClose, isLight }: OptionsProps) => {
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
        isLight ? "bg-white" : "bg-very_dark_grey"
      } p-4 flex flex-col items-start gap-4 rounded-[4px]`}
    >
      <button
        className={`text-medium_grey ${
          isLight ? "hover:text-black" : "hover:text-white"
        } transition-all duration-300`}
      >
        Edit Board
      </button>
      <button className="text-red hover:text-red_hover transition-all duration-300">
        Delete Board
      </button>
    </div>
  );
};

export default Options;
