import { ModalProps } from "@/ts/types";
import React from "react";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-40 flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default Modal;
