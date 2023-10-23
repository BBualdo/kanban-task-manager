import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import { TaskInterface } from "@/ts/types";

const TasksList = ({ tasks }: { tasks: TaskInterface[] }) => {
  const taskElement = tasks.map((task) => (
    <Task key={uuidv4()} taskName={task.title} subtasks={task.subtasks} />
  ));
  return <>{taskElement}</>;
};

export default TasksList;
