"use client";

import Image from "next/image";
import darkLogo from "../../public/assets/logo-dark.svg";
import lightLogo from "../../public/assets/logo-light.svg";
import sunIcon from "../../public/assets/icon-light-theme.svg";
import moonIcon from "../../public/assets/icon-dark-theme.svg";
import blindEye from "../../public/assets/icon-hide-sidebar.svg";
import Boards from "./Boards";

import { toggleTheme } from "@/redux/features/theme-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

const Sidebar = () => {
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const dispatch = useDispatch<AppDispatch>();

  const onClickToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <section
      className={`${
        isLightTheme
          ? "bg-white border-lines_light"
          : "bg-dark_grey border-lines_dark"
      } min-w-[300px] border-r-[1px]  min-h-full pt-8 pb-12 flex flex-col`}
    >
      {isLightTheme && (
        <Image src={darkLogo} alt="Kanban Logo" className="pl-[34px]" />
      )}
      {!isLightTheme && (
        <Image src={lightLogo} alt="Kanban Logo" className="pl-[34px]" />
      )}
      <div className="flex flex-col justify-between flex-1">
        <div className=" mt-[54px]">
          <h4 className="text-medium_grey pl-8">ALL BOARDS (3)</h4>
          <div className="mt-[19px]">
            {/* this will be rendered dynamically */}
            <Boards />
            <div className="flex items-center gap-4 px-8 py-4 rounded-r-full mr-6 cursor-pointer">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-purple"
              >
                <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
              </svg>
              <h3 className="text-purple">+ Create New Board</h3>
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
              className="w-12 h-5 bg-purple rounded-full cursor-pointer flex items-center justify-center"
            >
              <div
                className={`w-[14px] h-[14px] bg-white rounded-full transition-transform duration-400 ${
                  isLightTheme ? "translate-x-[-100%]" : "translate-x-[100%]"
                }`}
              />
            </div>
            <Image src={moonIcon} alt="Moon Icon" />
          </div>
          <div className="flex items-center gap-4 pl-8 mt-[22px]">
            <Image src={blindEye} alt="Crossed Eye Icon" />
            <button>
              <h3 className="text-medium_grey">Hide Sidebar</h3>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
