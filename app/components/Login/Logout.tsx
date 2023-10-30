"use client";

import React from "react";

import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Logout = ({ isLight }: { isLight: boolean }) => {
  const router = useRouter();
  const auth = getAuth();
  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <svg
        onClick={signUserOut}
        className={`${
          isLight ? "fill-black" : "fill-white"
        } hover:fill-purple transition-all duration-300 cursor-pointer`}
        height="24px"
        width="24px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <path
              d="M512,256L381.772,125.773v83.797H216.833v92.863h164.939v83.797L512,256z M247.787,271.478v-0.001v-30.954h164.939
			v-40.021L468.224,256l-55.498,55.499v-40.021H247.787z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M340.499,163.137V70.273H0v371.453h340.499v-92.863H92.863V163.137H340.499z M309.544,379.818v30.954H30.954V101.228
			h278.59v30.954H61.909v247.636H309.544z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logout;
