import { ColumnProps } from "@/ts/types";
import TasksList from "./TasksList";

const Column = ({ columns, columnName, tasks }: ColumnProps) => {
  return (
    <div className="flex flex-col gap-6 w-[280px]">
      <h4 className="uppercase text-medium_grey">{columnName}</h4>
      <div className="flex flex-col gap-5">
        <TasksList columns={columns} tasks={tasks} />
      </div>
    </div>
  );
};

export default Column;
