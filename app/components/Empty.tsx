import Image from "next/image";

import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showAddBoardModal } from "@/redux/features/add-board-slice";

import Modal from "./Modal";
import AddBoard from "./Modals/AddBoard";

import logo from "../../public/assets/logo-mobile.svg";

const Empty = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const isSidebarShown = useAppSelector(
    (state) => state.sidebarReducer.value.isShown
  );

  const isModalOpen = useAppSelector(
    (state) => state.addBoardModalReducer.value.isShown
  );

  const openModal = () => {
    dispatch(showAddBoardModal(true));
  };

  const closeModal = () => {
    dispatch(showAddBoardModal(false));
  };

  return (
    <>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AddBoard isLight={isLightTheme} onClose={closeModal} />
        </Modal>
      )}
      <div
        className={`${
          isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
        } flex-1 transition-all duration-300 ${
          isSidebarShown ? "ml-[300px]" : ""
        } h-screen flex items-center justify-center flex-col`}
      >
        <div className="flex items-center gap-6">
          <Image src={logo} alt="Kanban Logo" className="w-[100px]" />
          <h1
            className={`text-[80px] transition-all duration-300 ${
              isLightTheme ? "text-black" : "text-white"
            }`}
          >
            kanban
          </h1>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1
            className={`text-[32px] transition-all duration-300 ${
              isLightTheme ? "text-black" : "text-white"
            } text-center leading-10 mt-10`}
          >
            Welcome to <span className="text-gradient">Kanban</span>
            : <br /> <span className="text-purple">
              Task Management App
            </span>{" "}
            created to <br />{" "}
            <span className="text-purple_hover">make your work organized</span>.
          </h1>
          <button onClick={openModal} className="btn btn-primary-lg px-10">
            Create New Board
          </button>
        </div>
      </div>
    </>
  );
};

export default Empty;
