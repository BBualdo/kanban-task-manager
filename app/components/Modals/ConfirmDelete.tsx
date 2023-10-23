import React from "react";
import { ModalsProps } from "@/ts/types";

const ConfirmDelete = ({ isLight, onClose }: ModalsProps) => {
  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px]`}
    >
      This is delete modal
    </div>
  );
};

export default ConfirmDelete;
