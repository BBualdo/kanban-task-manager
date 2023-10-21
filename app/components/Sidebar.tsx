"use client";

import Image from "next/image";

import logo from "../../public/assets/logo-mobile.svg";
import sunIcon from "../../public/assets/icon-light-theme.svg";
import moonIcon from "../../public/assets/icon-dark-theme.svg";
import eye from "../../public/assets/icon-show-sidebar.svg";
import Boards from "./Boards";

import { toggleTheme } from "@/redux/features/theme-slice";
import { toggleSidebar } from "@/redux/features/sidebar-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

import boards from "../data/data";

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const onClickToggle = () => {
    dispatch(toggleTheme());
  };

  const isSidebarShown = useAppSelector(
    (state) => state.sidebarReducer.value.isShown
  );

  const toggleVisibility = () => {
    dispatch(toggleSidebar());
  };

  return (
    <section
      className={`${
        isLightTheme
          ? "bg-white border-lines_light"
          : "bg-dark_grey border-lines_dark"
      } min-w-[300px] border-r-[1px] min-h-full pt-8 pb-12 flex flex-col transition-all duration-300 absolute top-0 ${
        isSidebarShown ? "left-0" : "-left-[300px]"
      }`}
    >
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Kanban Logo" className="ml-[34px]" />
        <h1
          className={`text-[32px] transition-all duration-300 ${
            isLightTheme ? "text-black" : "text-white"
          }`}
        >
          kanban
        </h1>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className=" mt-[54px]">
          <h4 className="text-medium_grey pl-8">
            ALL BOARDS ({boards.length})
          </h4>
          <div className="mt-[19px]">
            {/* this will be rendered dynamically */}
            <Boards />
            <div className="group flex items-center gap-4 px-8 py-4 rounded-r-full mr-6 cursor-pointer">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-purple group-hover:fill-purple_hover transition-all duration-300"
              >
                <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
              </svg>
              <h3 className="text-purple group-hover:text-purple_hover transition-all duration-300">
                + Create New Board
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${
              isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
            } flex items-center justify-center gap-3 mx-6 py-[14px]`}
          >
            <Image src={sunIcon} alt="Sun Icon" />
            <div
              onClick={onClickToggle}
              className="w-12 h-5 bg-purple hover:bg-purple_hover transition-all duration-200 rounded-full cursor-pointer flex items-center justify-center"
            >
              <div
                className={`w-[14px] h-[14px] bg-white rounded-full transition-transform duration-400 ${
                  isLightTheme ? "translate-x-[-100%]" : "translate-x-[100%]"
                }`}
              />
            </div>
            <Image src={moonIcon} alt="Moon Icon" />
          </div>
          <div
            onClick={toggleVisibility}
            className={`group ${
              isLightTheme ? "hover:bg-purple/10" : "hover:bg-white"
            } transition-all duration-300 flex items-center gap-4 px-8 py-4 rounded-r-full mr-6 mt-[22px] cursor-pointer`}
          >
            <svg
              width="18"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-medium_grey group-hover:fill-purple transition-all duration-300"
            >
              <path d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z" />
            </svg>
            <button>
              <h3 className="text-medium_grey group-hover:text-purple transition-all duration-300">
                Hide Sidebar
              </h3>
            </button>
          </div>
        </div>
      </div>
      {!isSidebarShown && (
        <div
          onClick={toggleVisibility}
          className="w-14 h-12 rounded-r-full bg-purple absolute bottom-8 -right-14 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-purple_hover"
        >
          <Image src={eye} alt="Eye Icon" />
        </div>
      )}
    </section>
  );
};

export default Sidebar;
