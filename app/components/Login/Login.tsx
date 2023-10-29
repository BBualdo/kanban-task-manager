"use client";

import Image from "next/image";

import preview from "../../../public/assets/preview.jpg";
import googleIcon from "../../../public/assets/google-logo.svg";
import LoginHeader from "./LoginHeader";
import ThemeSwitch from "../ThemeSwitch";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { toggleTheme } from "@/redux/features/theme-slice";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const onClickToggle = () => {
    dispatch(toggleTheme());
  };

  const isEmpty = false;

  return (
    <main
      className={`flex items-center ${
        isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
      } transition-all duration-300 h-full`}
    >
      <div className="flex-1 p-10 flex flex-col">
        <div>
          <LoginHeader isLight={isLightTheme} />
        </div>
        <div className="flex justify-center mt-2">
          <button className="btn btn-primary-lg flex items-center border-2 border-purple bg-white text-black px-10 hover:text-white gap-4 mt-4 mb-4">
            <Image src={googleIcon} alt="Google Logo" />
            <p className="p-lg">Sign in with Google</p>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-2 w-[520px]">
              <label
                className={`${
                  isLightTheme ? "text-black" : "text-white"
                } p-lg uppercase`}
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                className={`${
                  isLightTheme
                    ? "bg-white text-black border-lines_light"
                    : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
                } ${
                  isEmpty && "border-red focus:border-red"
                } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300 flex-1`}
                id="email"
                name="email"
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div className="flex flex-col gap-2 w-[520px]">
              <label
                className={`${
                  isLightTheme ? "text-black" : "text-white"
                } p-lg uppercase`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`${
                  isLightTheme
                    ? "bg-white text-black border-lines_light"
                    : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
                } ${
                  isEmpty && "border-red focus:border-red"
                } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300 flex-1`}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mt-4 mb-4">
            <button className="btn btn-primary-lg w-[250px]">Sign in</button>
            <button className="btn btn-primary-lg border-2 border-purple bg-white text-black w-[250px] py-2 hover:text-white">
              Create Account
            </button>
          </div>
        </div>
        <ThemeSwitch isLight={isLightTheme} toggle={onClickToggle} />
      </div>
    </main>
  );
};

export default Login;
