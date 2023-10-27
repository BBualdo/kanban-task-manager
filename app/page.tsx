"use client";

import { useAppSelector } from "@/redux/store";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Empty from "./components/Empty";

export default function Home() {
  const selectedBoard = useAppSelector(
    (state) => state.selectedBoardReducer.value.selectedBoard
  );

  return (
    <>
      <div className="min-h-[100vh] flex flex-col relative">
        {selectedBoard && <Header />}
        <div className="w-full flex flex-1 overflow-auto">
          {/* <Sidebar /> */}
          {selectedBoard && <Feed />}
          {!selectedBoard && <Empty />}
        </div>
      </div>
    </>
  );
}
