"use client";

import Image from "next/image";

import logo from "../../public/assets/logo-mobile.svg";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showDeleteBoardModal } from "@/redux/features/confirm-delete-board-slice";
import ConfirmBoardDelete from "./Modals/ConfirmBoardDelete";
import Modal from "./Modal";
import { showEditBoardModal } from "@/redux/features/edit-board-slice";
import EditBoard from "./Modals/EditBoard";
import { showAddTaskModal } from "@/redux/features/add-task-slice";
import AddTask from "./Modals/AddTask";
import BoardOptions from "./Modals/BoardOptions";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isMenuShown, setIsMenuShown] = useState(false);

  const showMenu = () => {
    setIsMenuShown(true);
  };

  const hideMenu = () => {
    setIsMenuShown(false);
  };

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const isSidebarShown = useAppSelector(
    (state) => state.sidebarReducer.value.isShown
  );

  const isDeleteModalOpen = useAppSelector(
    (state) => state.deleteBoardModalReducer.value.isShown
  );

  const openDeleteBoardModal = () => {
    dispatch(showDeleteBoardModal(true));
    hideMenu();
  };

  const closeDeleteBoardModal = () => {
    dispatch(showDeleteBoardModal(false));
  };

  const isEditModalOpen = useAppSelector(
    (state) => state.editBoardModalReducer.value.isShown
  );

  const openEditBoardModal = () => {
    dispatch(showEditBoardModal(true));
    hideMenu();
  };

  const closeEditBoardModal = () => {
    dispatch(showEditBoardModal(false));
  };

  const isAddTaskModalOpen = useAppSelector(
    (state) => state.addTaskModalReducer.value.isShown
  );

  const openAddTaskModal = () => {
    dispatch(showAddTaskModal(true));
    hideMenu();
  };

  const closeAddTaskModal = () => {
    dispatch(showAddTaskModal(false));
  };

  return (
    <>
      {isDeleteModalOpen && (
        <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteBoardModal}>
          <ConfirmBoardDelete
            isLight={isLightTheme}
            onClose={closeDeleteBoardModal}
          />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditBoardModal}>
          <EditBoard isLight={isLightTheme} onClose={closeEditBoardModal} />
        </Modal>
      )}
      {isAddTaskModalOpen && (
        <Modal isOpen={isAddTaskModalOpen} onClose={closeAddTaskModal}>
          <AddTask isLight={isLightTheme} onClose={closeAddTaskModal} />
        </Modal>
      )}
      <header
        className={`border-b-[1px] ${
          isLightTheme
            ? "border-lines_light bg-white"
            : "border-lines_dark bg-dark_grey"
        }  flex items-center relative transition-all duration-300 md:min-w-[700px] xs:p-4 md:p-0`}
      >
        <div
          className={`xs:pr-4 md:pr-8 ${
            isLightTheme ? "border-lines_light" : "border-lines_dark"
          } md:border-r-[1px] md:absolute transition-all duration-300 h-full`}
        >
          <div className="flex items-center h-full gap-4">
            <Image src={logo} alt="Kanban Logo" className="md:ml-[34px]" />
            <h1
              className={`xs:hidden md:block text-[32px] transition-all duration-300 ${
                isLightTheme ? "text-black" : "text-white"
              }`}
            >
              kanban
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between flex-1 md:pt-6 md:pb-6 md:pl-[260px] lg:pl-[300px] md:pr-6 lg:pr-8">
          <div className="group xs:max-md:flex xs:max-md:items-center xs:max-md:gap-2">
            <h1
              className={`${
                isLightTheme ? "text-black" : "text-white"
              } transition-all duration-300 ${
                isSidebarShown
                  ? "md:translate-x-5 lg:translate-x-6"
                  : "translate-x-0"
              } xs:text-[18px] md:text-[20px] lg:text-[24px]`}
            >
              {selectedBoard.name}
            </h1>
            <svg
              className="md:hidden stroke-purple group-hover:stroke-purple_hover transition-all duration-200"
              width="10"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
            </svg>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={openAddTaskModal}
              disabled={selectedBoard.columns.length === 0}
              className="btn btn-primary-lg xs:max-md:py-0 px-6 xs:max-md:bg-plus xs:max-md:h-8 xs:max-md:bg-no-repeat xs:max-md:bg-center"
            >
              <p className="xs:max-md:text-[32px] xs:hidden md:inline">
                + Add New Task
              </p>
            </button>
            <svg
              onClick={showMenu}
              width="5"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className={`cursor-pointer fill-medium_grey  ${
                isLightTheme ? "hover:fill-black" : "hover:fill-white"
              } transition-all duration-100`}
            >
              <g fillRule="evenodd">
                <circle cx="2.308" cy="2.308" r="2.308" />
                <circle cx="2.308" cy="10" r="2.308" />
                <circle cx="2.308" cy="17.692" r="2.308" />
              </g>
            </svg>
            {isMenuShown && (
              <BoardOptions
                onClose={hideMenu}
                isLight={isLightTheme}
                openDeleteBoardModal={openDeleteBoardModal}
                openEditBoardModal={openEditBoardModal}
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
