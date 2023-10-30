"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Empty from "./components/Empty";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showAddBoardModal } from "@/redux/features/add-board-slice";
import Modal from "./components/Modal";
import AddBoard from "./components/Modals/AddBoard";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase.config";
import Login from "./components/Login/Login";

export default function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const signUserOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  });

  const dispatch = useDispatch<AppDispatch>();

  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = () => {
    setWidth(typeof window !== "undefined" ? window.innerWidth : 0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const isModalOpen = useAppSelector(
    (state) => state.addBoardModalReducer.value.isShown
  );
  const closeModal = () => {
    dispatch(showAddBoardModal(false));
  };

  return (
    <>
      {!isUserLoggedIn && <Login />}
      {isUserLoggedIn && (
        <div className="min-h-[100vh] flex flex-col relative">
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <AddBoard isLight={isLightTheme} onClose={closeModal} />
            </Modal>
          )}
          {selectedBoard && <Header logout={signUserOut} />}
          <div className="w-full flex flex-1 overflow-auto">
            {width > 666 && <Sidebar />}
            {selectedBoard && <Feed />}
            {!selectedBoard && <Empty />}
          </div>
        </div>
      )}
    </>
  );
}
