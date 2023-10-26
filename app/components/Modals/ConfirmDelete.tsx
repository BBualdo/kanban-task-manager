import { ModalsProps } from "@/ts/types";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { switchBoard } from "@/redux/features/selected-board-slice";

import data from "../../data/data.json";

const ConfirmDelete = ({ isLight, onClose }: ModalsProps) => {
  console.log("Confirm Delete rendered");
  const dispatch = useDispatch<AppDispatch>();

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const deleteBoard = () => {
    const index = data.boards.indexOf(selectedBoard);
    data.boards.splice(index, 1);
    if (index - 1 === -1) {
      dispatch(switchBoard(data.boards[index]));
    } else if (index) {
      dispatch(switchBoard(data.boards[index - 1]));
    } else {
      dispatch(switchBoard(null));
    }
    onClose();
  };

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px] flex flex-col gap-6`}
    >
      <h2 className="text-red">Delete this board?</h2>
      <p className="p-lg text-medium_grey">
        {`Are you sure you want to delete the ‘${selectedBoard.name}’ board? This action will
        remove all columns and tasks and cannot be reversed.`}
      </p>
      <div className="flex items-center justify-between">
        <button onClick={deleteBoard} className="btn btn-destructive px-[78px]">
          Delete
        </button>
        <button
          onClick={onClose}
          className={`btn btn-secondary px-[78px] ${
            isLight ? "" : "bg-white hover:bg-white hover:text-purple_hover"
          }`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
