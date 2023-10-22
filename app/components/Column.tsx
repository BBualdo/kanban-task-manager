import { ColumnProps } from "@/ts/types";
import Task from "./Task";

import { v4 as uuidv4 } from "uuid";

const Column = ({ columnName, tasks }: ColumnProps) => {
  console.log(tasks);
  const taskElement = tasks.map((task) => (
    <Task key={uuidv4()} taskName={task.name} subtasks={task.subtasks} />
  ));
  return (
    <div className="flex flex-col gap-6 min-w-[280px]">
      <h4 className="uppercase text-medium_grey">{columnName}</h4>
      <div className="flex flex-col gap-5">{taskElement}</div>
    </div>
  );
};

export default Column;
