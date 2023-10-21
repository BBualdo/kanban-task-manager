"use client";

import Image from "next/image";

import dotsIcon from "../../public/assets/icon-vertical-ellipsis.svg";

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
      }  flex items-center justify-between pt-5 pb-7 pl-6 pr-8`}
    >
      <div>
        <h1 className={`${isLightTheme ? "text-black" : "text-white"}`}>
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
    </header>
  );
};

export default Header;
