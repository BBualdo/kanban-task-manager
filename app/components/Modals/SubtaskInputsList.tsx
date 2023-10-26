import { SubtaskInterface } from "@/ts/types";
import SubtaskInput from "./SubtaskInput";

import { v4 as uuidv4 } from "uuid";

const SubtaskInputsList = ({
  isLight,
  subtasks,
  addNew,
  remove,
  update,
}: {
  isLight: boolean;
  subtasks: SubtaskInterface[];
  addNew: () => void;
  remove: (subtaskToDelete: SubtaskInterface) => void;
  update: (
    event: React.ChangeEvent<HTMLInputElement>,
    subtaskToUpdate: SubtaskInterface
  ) => void;
}) => {
  const subtaskInputs = subtasks.map((subtask) => (
    <SubtaskInput
      key={uuidv4()}
      isLight={isLight}
      title={subtask.title}
      remove={remove}
      currentSubtask={subtask}
      update={update}
    />
  ));

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label
          className={`p-md ${isLight ? "text-medium_grey" : "text-white"}`}
        >
          Subtasks
        </label>
        <div className="flex flex-col gap-3 max-h-[153px] overflow-y-auto">
          {subtaskInputs}
        </div>
      </div>

      <button
        onClick={addNew}
        className={`btn btn-secondary ${
          isLight ? "" : "bg-white hover:bg-white/80"
        }`}
      >
        + Add New Subtask
      </button>
    </div>
  );
};

export default SubtaskInputsList;
