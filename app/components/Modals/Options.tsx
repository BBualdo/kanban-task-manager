import DUMMY_BOARDS from "@/app/data/data";
import { switchBoard } from "@/redux/features/board-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { OptionsProps } from "@/ts/types";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const Options = ({ onClose, isLight }: OptionsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedBoard = useAppSelector(
    (state) => state.boardReducer.value.selectedBoard
  );

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

  const deleteBoard = () => {
    const index = DUMMY_BOARDS.indexOf(selectedBoard);
    DUMMY_BOARDS.splice(index, 1);
    if (index - 1 === -1) {
      dispatch(switchBoard(DUMMY_BOARDS[index]));
    } else if (index) {
      dispatch(switchBoard(DUMMY_BOARDS[index - 1]));
    } else {
      dispatch(switchBoard(null));
    }
    onClose();
  };

  return (
    <div
      ref={optionsRef}
      className={`absolute w-[192px] -bottom-[80px] right-6 ${
        isLight ? "bg-very_dark_grey" : "bg-white"
      } p-4 flex flex-col items-start gap-4 rounded-[4px]`}
    >
      <button
        className={`text-medium_grey ${
          isLight ? "hover:text-white" : "hover:text-black"
        } transition-all duration-300`}
      >
        Edit Board
      </button>
      <button
        onClick={deleteBoard}
        className="text-red hover:text-red_hover transition-all duration-300"
      >
        Delete Board
      </button>
    </div>
  );
};

export default Options;
