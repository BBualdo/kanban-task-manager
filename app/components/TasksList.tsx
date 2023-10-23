import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import { TaskInterface } from "@/ts/types";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { switchTask } from "@/redux/features/selected-task-slice";

const TasksList = ({ tasks }: { tasks: TaskInterface[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedTask = useAppSelector(
    (state) => state.selectedTaskReducer.value.selectedTask
  );

  const selectTask = (task: TaskInterface) => {
    dispatch(switchTask(task));
  };

  const taskElement = tasks.map((task) => (
    <Task
      selectTask={() => selectTask(task)}
      key={uuidv4()}
      taskName={task.title}
      subtasks={task.subtasks}
    />
  ));
  return <>{taskElement}</>;
};

export default TasksList;
