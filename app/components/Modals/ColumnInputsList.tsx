import React from "react";
import ColumnInput from "./ColumnInput";
import { BoardColumnInterface } from "@/ts/types";

const ColumnInputsList = ({
  isLight,
  columns,
}: {
  isLight: boolean;
  columns: BoardColumnInterface[];
}) => {
  const columnInputs = columns.map((column) => (
    <ColumnInput isLight={isLight} name={column.name} />
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
