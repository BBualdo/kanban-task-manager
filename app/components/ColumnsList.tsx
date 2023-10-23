import { useAppSelector } from "@/redux/store";
import Column from "./Column";
import { v4 as uuidv4 } from "uuid";

const ColumnsList = () => {
  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const columnElement = selectedBoard.columns!.map((column) => (
    <Column key={uuidv4()} columnName={column.name} tasks={column.tasks} />
  ));
  return <>{columnElement}</>;
};

export default ColumnsList;
