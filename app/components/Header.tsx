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

  return (
    <header
      className={`border-b-[1px] ${
        isLightTheme
          ? "border-lines_light bg-white"
          : "border-lines_dark bg-dark_grey"
      }  flex items-center relative transition-all duration-200`}
    >
      <div
        className={`pr-8 ${
          isLightTheme ? "border-lines_light" : "border-lines_dark"
        } border-r-[1px] absolute transition-all duration-200`}
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
            } transition-all duration-200`}
          >
            Platform Launch
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <button disabled className="btn btn-primary-lg px-6">
            + Add New Task
          </button>
          <Image
            src={dotsIcon}
            alt="Three Vertical Dots"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
