"use client";

import { useAppSelector } from "@/redux/store";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Empty from "./components/Empty";
import { useEffect, useState } from "react";

export default function Home() {
  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
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

  return (
    <>
      <div className="min-h-[100vh] flex flex-col relative">
        {selectedBoard && <Header />}
        <div className="w-full flex flex-1 overflow-auto">
          {width > 666 && <Sidebar />}
          {selectedBoard && <Feed />}
          {!selectedBoard && <Empty />}
        </div>
      </div>
    </>
  );
}
