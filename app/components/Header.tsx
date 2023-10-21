"use client";

import Image from "next/image";

import dotsIcon from "../../public/assets/icon-vertical-ellipsis.svg";
import darkLogo from "../../public/assets/logo-dark.svg";
import lightLogo from "../../public/assets/logo-light.svg";

import { useAppSelector } from "@/redux/store";

const Header = () => {
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const isSidebarShown = useAppSelector(
    (state) => state.sidebarReducer.value.isShown
  );

  return (
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
            Platform Launch
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <button disabled className="btn btn-primary-lg px-6">
            + Add New Task
          </button>
          <svg
            width="5"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer fill-medium_grey  ${
              isLightTheme ? "hover:fill-black" : "hover:fill-white"
            } transition-all duration-100`}
          >
            <g fill-rule="evenodd">
              <circle cx="2.308" cy="2.308" r="2.308" />
              <circle cx="2.308" cy="10" r="2.308" />
              <circle cx="2.308" cy="17.692" r="2.308" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
