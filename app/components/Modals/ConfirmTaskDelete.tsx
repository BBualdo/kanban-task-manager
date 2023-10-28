import { AppDispatch, useAppSelector } from "@/redux/store";
import { ModalsProps } from "@/ts/types";

import data from "../../data/data.json";
import { useDispatch } from "react-redux";
import { switchBoard } from "@/redux/features/selected-board-slice";
import { switchTask } from "@/redux/features/selected-task-slice";

const ConfirmTaskDelete = ({ isLight, onClose }: ModalsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedTask = useAppSelector(
    (state) => state.selectedTaskReducer.value.selectedTask
  );

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const deleteTask = () => {
    const updatedColumns = selectedBoard.columns.map((column) => {
      if (column.tasks.includes(selectedTask!)) {
        const updatedTasks = column.tasks.filter(
          (task) => task.id !== selectedTask!.id
        );
        return { ...column, tasks: updatedTasks };
      } else {
        return column;
      }
    });

    const newBoard = { ...selectedBoard, columns: updatedColumns };

    const updatedBoards = data.boards.map((board) => {
      if (board.id === newBoard.id) {
        return newBoard;
      } else {
        return board;
      }
    });

    data.boards = updatedBoards;
    dispatch(switchBoard(newBoard));
    onClose();
  };

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] md:p-8 xs:p-6 xs:w-auto md:w-[480px] flex flex-col gap-6`}
    >
      <h2 className="text-red">Delete this task?</h2>
      <p className="p-lg text-medium_grey xs:max-md:max-w-[295px]">
        {`Are you sure you want to delete the ‘${
          selectedTask!.title
        }’ task and it's subtasks? This action cannot be reversed.`}
      </p>
      <div className="flex items-center justify-between xs:max-md:flex-col xs:max-md:gap-4">
        <button
          onClick={deleteTask}
          className="btn btn-destructive xs:max-md:w-full md:px-[78px]"
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className={`btn btn-secondary xs:max-md:w-full md:px-[78px] ${
            isLight ? "" : "bg-white hover:bg-white hover:text-purple_hover"
          }`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmTaskDelete;
