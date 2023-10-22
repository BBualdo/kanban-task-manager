import { ReactNode } from "react";

export interface ColumnProps {
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
  id: number;
  name: string;
  columns?: BoardColumnInterface[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
