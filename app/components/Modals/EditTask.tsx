import { AppDispatch, useAppSelector } from "@/redux/store";
import { ModalsProps, SubtaskInterface, TaskInterface } from "@/ts/types";
import { useState } from "react";
import SubtaskInputsList from "./SubtaskInputsList";
import Dropdown from "./Dropdown";

import data from "../../data/data.json";
import { useDispatch } from "react-redux";
import { switchBoard } from "@/redux/features/selected-board-slice";

const EditTask = ({ isLight, onClose }: ModalsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );
  const selectedTask = useAppSelector(
    (state) => state.selectedTaskReducer.value.selectedTask
  );
  const [editedTask, setEditedTask] = useState(selectedTask);

  const [subtasksToEdit, setSubtasksToEdit] = useState<SubtaskInterface[]>(
    selectedTask!.subtasks
  );

  const statuses = selectedBoard.columns;

  const [selectedStatus, setSelectedStatus] = useState(selectedTask!.status);

  const saveChanges = () => {
    console.log(selectedBoard);
    if (subtasksToEdit.some((subtask) => subtask.title == "")) {
      return;
    } else if (editedTask!.title == "") {
      editedTask!.title = "New Task";
    }

    const updatedTask: TaskInterface = {
      ...editedTask!,
      title: editedTask!.title,
      description: editedTask!.description,
      status: selectedStatus,
      subtasks: subtasksToEdit,
    };

    const updatedColumns = selectedBoard.columns.map((column) => {
      if (column.name === selectedTask!.status) {
        const updatedTasks = column.tasks.filter((task) => {
          task.id !== updatedTask.id;
        });
        if (selectedTask!.status === updatedTask.status) {
          return { ...column, tasks: [...updatedTasks, updatedTask] };
        } else {
          return { ...column, tasks: updatedTasks };
        }
      } else if (column.name === selectedStatus) {
        return { ...column, tasks: [...column.tasks, updatedTask] };
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

  const addNewSubtask = () => {
    const newSubtask: SubtaskInterface = {
      title: "",
      isCompleted: false,
    };
    setSubtasksToEdit((prevSubtasks) => [...prevSubtasks, newSubtask]);
  };

  const removeNewSubtask = (subtaskToDelete: SubtaskInterface) => {
    setSubtasksToEdit((prevSubtasks) =>
      prevSubtasks.filter((subtask) => subtask !== subtaskToDelete)
    );
  };

  const updateSubtaskTitle = (
    event: React.ChangeEvent<HTMLInputElement>,
    subtaskToUpdate: SubtaskInterface
  ) => {
    const newTitle = event.target.value;

    setSubtasksToEdit((prevSubtasks) => {
      return prevSubtasks.map((subtask) => {
        if (subtask === subtaskToUpdate) {
          return { ...subtask, title: newTitle };
        } else {
          return subtask;
        }
      });
    });
  };

  const changeStatus = (status: string) => {
    setSelectedStatus(status);
  };

  const updateTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;

    setEditedTask((prevTask) => ({
      ...prevTask!,
      title: newTitle,
    }));
  };

  const updateTaskDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = event.target.value;

    setEditedTask((prevTask) => ({
      ...prevTask!,
      description: newDescription,
    }));
  };

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] md:p-8 xs:p-6 xs:w-auto md:w-[480px]`}
    >
      <h2 className={`${isLight ? "text-black" : "text-white"}`}>Edit Task</h2>
      <div className="flex flex-col mt-6 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="task-name"
            className={`${isLight ? "text-medium_grey" : "text-white"} p-md`}
          >
            Title
          </label>
          <input
            onChange={updateTaskTitle}
            id="task-name"
            type="text"
            value={editedTask!.title}
            placeholder="e.g. Take coffee break"
            className={`${
              isLight
                ? "bg-white text-black border-lines_light"
                : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
            } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="task-description"
            className={`${isLight ? "text-medium_grey" : "text-white"} p-md`}
          >
            Description
          </label>
          <textarea
            onChange={updateTaskDescription}
            value={editedTask!.description}
            id="task-description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            className={`${
              isLight
                ? "bg-white text-black border-lines_light"
                : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
            } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300 h-[112px] resize-none`}
          />
        </div>
        <SubtaskInputsList
          isLight={isLight}
          subtasks={subtasksToEdit}
          addNew={addNewSubtask}
          remove={removeNewSubtask}
          update={updateSubtaskTitle}
        />
        <Dropdown
          isLight={isLight}
          statuses={statuses}
          selectedStatus={selectedStatus}
          changeStatus={changeStatus}
        />
        <button onClick={saveChanges} className="btn btn-primary-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditTask;
