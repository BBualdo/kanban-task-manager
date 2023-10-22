"use client";

import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="max-h-[100vh] flex flex-col relative overflow-hidden">
        <Header />
        <div className="w-full flex flex-1 overflow-auto">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </>
  );
}
