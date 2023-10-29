import Image from "next/image";

import sunIcon from "../../public/assets/icon-light-theme.svg";
import moonIcon from "../../public/assets/icon-dark-theme.svg";

const ThemeSwitch = ({
  isLight,
  toggle,
}: {
  isLight: boolean;
  toggle: () => void;
}) => {
  return (
    <div
      className={`${
        isLight ? "bg-light_grey" : "bg-very_dark_grey"
      } flex items-center justify-center gap-3 xs:max-md:mt-4 mx-6 py-[14px] transition-all duration-300`}
    >
      <Image src={sunIcon} alt="Sun Icon" />
      <div
        onClick={toggle}
        className="w-12 h-5 bg-purple hover:bg-purple_hover transition-all duration-200 rounded-full cursor-pointer flex items-center justify-center"
      >
        <div
          className={`w-[14px] h-[14px] bg-white rounded-full transition-transform duration-400 ${
            isLight ? "translate-x-[-100%]" : "translate-x-[100%]"
          }`}
        />
      </div>
      <Image src={moonIcon} alt="Moon Icon" />
    </div>
  );
};

export default ThemeSwitch;
