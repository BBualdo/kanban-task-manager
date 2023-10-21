import { ReactNode } from "react";

export interface BoardInterface {
  id: number;
  name: string;
  content?: {
    todo: string[];
    doing: string[];
    done: string[];
  };
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
