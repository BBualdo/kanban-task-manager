import { SubtaskProps } from "@/ts/types";
import Subtask from "./Subtask";
import { v4 as uuidv4 } from "uuid";

const SubtasksList = ({ subtasks }: SubtaskProps) => {
  const subtasksElement = subtasks.map((subtask) => (
    <Subtask
      key={uuidv4()}
      title={subtask.title}
      isCompleted={subtask.isCompleted}
    />
  ));

  return <div className="flex flex-col gap-2">{subtasksElement}</div>;
};

export default SubtasksList;
