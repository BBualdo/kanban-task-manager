import { AppDispatch, useAppSelector } from "@/redux/store";
import ColumnsList from "./ColumnsList";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { showEditBoardModal } from "@/redux/features/edit-board-slice";
import { showEditTaskModal } from "@/redux/features/edit-task-slice";
import { showDeleteTaskModal } from "@/redux/features/confirm-delete-task-slice";
import EditTask from "./Modals/EditTask";
import ConfirmTaskDelete from "./Modals/ConfirmTaskDelete";

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );
  const isSidebarShown = useAppSelector(
    (state) => state.sidebarReducer.value.isShown
  );

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const openEditBoardModal = () => {
    dispatch(showEditBoardModal(true));
  };

  const isEditTaskOpen = useAppSelector(
    (state) => state.editTaskModalReducer.value.isShown
  );
  const closeEditTaskModal = () => {
    dispatch(showEditTaskModal(false));
  };
  const isDeleteTaskOpen = useAppSelector(
    (state) => state.deleteTaskModalReducer.value.isShown
  );
  const closeDeleleTaskModal = () => {
    dispatch(showDeleteTaskModal(false));
  };

  return (
    <>
      {isEditTaskOpen && (
        <Modal isOpen={isEditTaskOpen} onClose={closeEditTaskModal}>
          <EditTask isLight={isLightTheme} onClose={closeEditTaskModal} />
        </Modal>
      )}
      {isDeleteTaskOpen && (
        <Modal isOpen={isDeleteTaskOpen} onClose={closeDeleleTaskModal}>
          <ConfirmTaskDelete
            isLight={isLightTheme}
            onClose={closeDeleleTaskModal}
          />
        </Modal>
      )}
      <div
        className={`${
          isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
        } flex-1 transition-all duration-300 ${
          isSidebarShown ? "ml-[300px]" : ""
        } h-full pb-6`}
      >
        {selectedBoard.columns.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <h2 className="text-medium_grey">
              This board is empty. Create a new column to get started.
            </h2>
            <button
              onClick={openEditBoardModal}
              className="btn btn-primary-lg px-[18px]"
            >
              + Add New Column
            </button>
          </div>
        ) : (
          <div className="pt-6 pb-13 px-6 flex gap-6">
            <ColumnsList />
            <button
              onClick={openEditBoardModal}
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
    </>
  );
};

export default Feed;
