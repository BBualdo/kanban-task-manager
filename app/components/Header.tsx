"use client";

import Image from "next/image";

import darkLogo from "../../public/assets/logo-dark.svg";
import lightLogo from "../../public/assets/logo-light.svg";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { useState } from "react";
import Options from "./Modals/Options";
import { useDispatch } from "react-redux";
import { showDeleteBoardModal } from "@/redux/features/confirm-delete-board-slice";
import ConfirmDelete from "./Modals/ConfirmDelete";
import Modal from "./Modal";
import { showEditBoardModal } from "@/redux/features/edit-board-slice";
import EditBoard from "./Modals/EditBoard";

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
  };

  const closeDeleteBoardModal = () => {
    dispatch(showDeleteBoardModal(false));
  };

  const isEditModalOpen = useAppSelector(
    (state) => state.editBoardModalReducer.value.isShown
  );

  const openEditBoardModal = () => {
    dispatch(showEditBoardModal(true));
  };

  const closeEditBoardModal = () => {
    dispatch(showEditBoardModal(false));
  };

  return (
    <>
      {isDeleteModalOpen && (
        <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteBoardModal}>
          <ConfirmDelete
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
      <header
        className={`border-b-[1px] ${
          isLightTheme
            ? "border-lines_light bg-white"
            : "border-lines_dark bg-dark_grey"
        }  flex items-center relative transition-all duration-300`}
      >
        <div
          className={`pr-8 ${
            isLightTheme ? "border-lines_light" : "border-lines_dark"
          } border-r-[1px] absolute transition-all duration-300`}
        >
          {isLightTheme && (
            <Image
              src={darkLogo}
              alt="Kanban Logo"
              className="mt-5 mb-7 ml-6 mr-8"
            />
          )}
          {!isLightTheme && (
            <Image
              src={lightLogo}
              alt="Kanban Logo"
              className="mt-5 mb-7 ml-6 mr-8"
            />
          )}
        </div>
        <div className="flex items-center justify-between flex-1 pt-5 pb-7 pl-[300px] pr-8">
          <div>
            <h1
              className={`${
                isLightTheme ? "text-black" : "text-white"
              } transition-all duration-300 ${
                isSidebarShown ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {selectedBoard.name}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <button
              disabled={selectedBoard.columns.length === 0}
              className="btn btn-primary-lg px-6"
            >
              + Add New Task
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
              <Options
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
