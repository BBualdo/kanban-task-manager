"use client";

import { firebaseConfig } from "@/firebase.config";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useRouter } from "next/navigation";

import Image from "next/image";
import googleIcon from "../../../public/assets/google-logo.svg";
import LoginHeader from "./LoginHeader";
import ThemeSwitch from "../ThemeSwitch";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { toggleTheme } from "@/redux/features/theme-slice";
import { useRef, useState } from "react";

const Login = () => {
  const [isEmpty, setIsEmpty] = useState({ email: false, password: false });

  const dispatch = useDispatch<AppDispatch>();

  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  const onClickToggle = () => {
    dispatch(toggleTheme());
  };

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const authCreateAccountWithEmail = () => {
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    if (isEmpty.email || isEmpty.password) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.replace("..");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            <div className="relative flex flex-col gap-2 xs:w-full md:w-[520px]">
              <label
                className={`${
                  isLightTheme ? "text-black" : "text-white"
                } p-lg uppercase`}
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                onChange={() =>
                  setIsEmpty({
                    ...isEmpty,
                    email: emailInputRef.current!.value === "",
                  })
                }
                ref={emailInputRef}
                className={`${
                  isLightTheme
                    ? "bg-white text-black border-lines_light"
                    : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
                } ${
                  isEmpty.email && "border-red focus:border-red"
                } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300 flex-1`}
                id="email"
                name="email"
                type="text"
                placeholder="E-mail"
              />
              {isEmpty.email && (
                <p className="absolute xs:max-md:text-[10px] right-4 top-[41px] p-lg text-red">
                  Can&apos;t be empty
                </p>
              )}
            </div>
            <div className="relative flex flex-col gap-2 xs:w-full md:w-[520px]">
              <label
                className={`${
                  isLightTheme ? "text-black" : "text-white"
                } p-lg uppercase`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={() =>
                  setIsEmpty({
                    ...isEmpty,
                    password: passwordInputRef.current!.value === "",
                  })
                }
                ref={passwordInputRef}
                className={`${
                  isLightTheme
                    ? "bg-white text-black border-lines_light"
                    : "bg-dark_grey text-white border-lines_dark placeholder:text-white/30"
                } ${
                  isEmpty.password && "border-red focus:border-red"
                } p-lg border-[2px] rounded-[4px] outline-none focus:border-purple px-4 py-2 cursor-pointer transition-all duration-300 flex-1`}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
              {isEmpty.password && (
                <p className="absolute xs:max-md:text-[10px] right-4 top-[41px] p-lg text-red">
                  Can&apos;t be empty
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mt-4 mb-4">
            <button className="btn btn-primary-lg w-[250px]">Sign in</button>
            <button
              onClick={authCreateAccountWithEmail}
              className="btn btn-primary-lg border-2 border-purple bg-white text-black w-[250px] py-2 hover:text-white"
            >
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
