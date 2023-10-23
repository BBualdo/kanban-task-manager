import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import { TaskInterface } from "@/ts/types";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { switchTask } from "@/redux/features/selected-task-slice";
import Modal from "./Modal";
import TaskDetails from "./Modals/TaskDetails";
import { showModal } from "@/redux/features/task-details-slice";

const TasksList = ({ tasks }: { tasks: TaskInterface[] }) => {
  const dispatch = useDispatch<AppDispatch>();

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const selectedTask = useAppSelector(
    (state) => state.selectedTaskReducer.value.selectedTask
  );

  const selectTask = (task: TaskInterface) => {
    dispatch(switchTask(task));
    openModal();
  };

  const openModal = () => {
    dispatch(showModal(true));
  };

  const closeModal = () => {
    dispatch(showModal(false));
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
          <TaskDetails isLight={isLightTheme} onClose={closeModal} />
        </Modal>
      )}
      {taskElement}
    </>
  );
};

export default TasksList;
