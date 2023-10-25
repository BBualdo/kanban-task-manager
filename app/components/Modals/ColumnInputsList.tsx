import ColumnInput from "./ColumnInput";
import { BoardColumnInterface } from "@/ts/types";
import { v4 as uuidv4 } from "uuid";

const ColumnInputsList = ({
  isLight,
  columns,
  addNew,
  remove,
  update,
}: {
  isLight: boolean;
  columns: BoardColumnInterface[];
  addNew: () => void;
  remove: (columnToDelete: BoardColumnInterface) => void;
  update: (
    event: React.ChangeEvent<HTMLInputElement>,
    columnToUpdate: BoardColumnInterface
  ) => void;
}) => {
  const columnInputs = columns.map((column) => (
    <ColumnInput
      key={uuidv4()}
      isLight={isLight}
      name={column.name}
      remove={remove}
      currentColumn={column}
      update={update}
    />
  ));

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label
          className={`p-md ${isLight ? "text-medium_grey" : "text-white"}`}
        >
          Board Columns
        </label>
        <div className="flex flex-col gap-3">{columnInputs}</div>
      </div>

      <button
        onClick={addNew}
        className={`btn btn-secondary ${
          isLight ? "" : "bg-white hover:bg-white/80"
        }`}
      >
        + Add New Column
      </button>
    </div>
  );
};

export default ColumnInputsList;
