import Image from "next/image";
import logo from "../../../public/assets/logo-mobile.svg";

const LoginHeader = ({ isLight }: { isLight: boolean }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-6">
        <Image
          src={logo}
          alt="Kanban Logo"
          className="xs:w-[60px] md:w-[80px] lg:w-[100px] transition-all duration-300"
        />
        <h1
          className={`xs:text-[48px] md:text-[64px] lg:text-[80px] transition-all duration-300 ${
            isLight ? "text-black" : "text-white"
          }`}
        >
          kanban
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h1
          className={`xs:text-[16px] md:text-[24px] lg:text-[28px] transition-all duration-300 ${
            isLight ? "text-black" : "text-white"
          } text-center leading-10 mt-4`}
        >
          Welcome to <span className="text-gradient">Kanban</span>
          : <br /> <span className="text-purple">Task Management App</span>{" "}
          created to <br />{" "}
          <span className="text-purple_hover">make your work organized</span>.
        </h1>
      </div>
    </div>
  );
};

export default LoginHeader;
