import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-[100vh] flex">
      <Sidebar />
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
}
