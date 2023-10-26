import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import { BoardColumnInterface, TaskInterface } from "@/ts/types";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { switchTask } from "@/redux/features/selected-task-slice";
import Modal from "./Modal";
import TaskDetails from "./Modals/TaskDetails";
import { showTaskDetailsModal } from "@/redux/features/task-details-slice";
import { selectedBoard } from "@/redux/features/selected-board-slice";

const TasksList = ({
  columns,
  tasks,
}: {
  columns: BoardColumnInterface[];
  tasks: TaskInterface[];
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const selectTask = (task: TaskInterface) => {
    dispatch(switchTask(task));
    openModal();
  };

  const openModal = () => {
    dispatch(showTaskDetailsModal(true));
  };

  const closeModal = () => {
    dispatch(showTaskDetailsModal(false));
  };

  const isModalOpen = useAppSelector(
    (state) => state.taskDetailsModalReducer.value.isShown
  );

  const taskElement = tasks.map((task) => (
    <Task
      selectTask={() => selectTask(task)}
      key={uuidv4()}
      taskName={task.title}
      subtasks={task.subtasks}
    />
  ));
  return (
    <>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <TaskDetails isLight={isLightTheme} statuses={columns} />
        </Modal>
      )}
      {taskElement}
    </>
  );
};

export default TasksList;
