import Image from "next/image";

import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showAddBoardModal } from "@/redux/features/add-board-slice";

import logo from "../../public/assets/logo-mobile.svg";

const Empty = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const isSidebarShown = useAppSelector(
    (state) => state.sidebarReducer.value.isShown
  );

  const openModal = () => {
    dispatch(showAddBoardModal(true));
  };

  return (
    <div
      className={`${
        isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
      } flex-1 transition-all duration-300 ${
        isSidebarShown ? "md:ml-[260px] lg:ml-[300px]" : ""
      } h-screen flex items-center justify-center flex-col`}
    >
      <div className="flex items-center gap-6">
        <Image
          src={logo}
          alt="Kanban Logo"
          className="xs:w-[60px] md:w-[80px] lg:w-[100px] transition-all duration-300"
        />
        <h1
          className={`xs:text-[48px] md:text-[64px] lg:text-[80px] transition-all duration-300 ${
            isLightTheme ? "text-black" : "text-white"
          }`}
        >
          kanban
        </h1>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1
          className={`xs:text-[20px] md:text-[28px] lg:text-[32px] transition-all duration-300 ${
            isLightTheme ? "text-black" : "text-white"
          } text-center leading-10 mt-10`}
        >
          Welcome to <span className="text-gradient">Kanban</span>
          : <br /> <span className="text-purple">Task Management App</span>{" "}
          created to <br />{" "}
          <span className="text-purple_hover">make your work organized</span>.
        </h1>
        <button onClick={openModal} className="btn btn-primary-lg px-10">
          Create New Board
        </button>
      </div>
    </div>
  );
};

export default Empty;
