import { useAppSelector } from "@/redux/store";
import { ModalsProps } from "@/ts/types";

const ConfirmTaskDelete = ({ isLight, onClose }: ModalsProps) => {
  const selectedTask = useAppSelector(
    (state) => state.selectedTaskReducer.value.selectedTask
  );

  const deleteTask = () => {
    console.log("Task has been deleted!");
  };

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px] flex flex-col gap-6`}
    >
      <h2 className="text-red">Delete this task?</h2>
      <p className="p-lg text-medium_grey">
        {`Are you sure you want to delete the ‘${
          selectedTask!.title
        }’ task and it's subtasks? This action cannot be reversed.`}
      </p>
      <div className="flex items-center justify-between">
        <button onClick={deleteTask} className="btn btn-destructive px-[78px]">
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

export default ConfirmTaskDelete;
