import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col relative">
      <Header />
      <div className="w-full flex flex-1">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
