import { useAppSelector } from "@/redux/store";
import ColumnsList from "./ColumnsList";

const Feed = () => {
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );
  const isSidebarShown = useAppSelector(
    (state) => state.sidebarReducer.value.isShown
  );

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  return (
    <div
      className={`${
        isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
      } flex-1 transition-all duration-300 ${
        isSidebarShown ? "ml-[300px]" : ""
      } h-screen`}
    >
      {selectedBoard.columns.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h2 className="text-medium_grey">
            This board is empty. Create a new column to get started.
          </h2>
          <button className="btn btn-primary-lg px-[18px]">
            + Add New Column
          </button>
        </div>
      ) : (
        <div className="pt-6 pb-13 px-6 flex gap-6">
          <ColumnsList />
          <button
            className={`group ${
              isLightTheme ? "bg-medium_grey/10" : "bg-dark_grey/10"
            } rounded-[6px] cursor-pointer mt-10 min-w-[282px]`}
          >
            <h1 className="text-medium_grey group-hover:text-purple transition-all duration-300">
              + New Column
            </h1>
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
