import { ReactNode } from "react";

export interface ColumnProps {
  key: string;
  columnName: string;
}

export interface TaskInterface {
  name: string;
  subtasks: string[];
}

export interface BoardColumnInterface {
  name: string;
  tasks: TaskInterface[];
}

export interface BoardInterface {
  name: string;
  columns?: BoardColumnInterface[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
