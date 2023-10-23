import { ReactNode } from "react";

export interface ColumnProps {
  key: string;
  columnName: string;
  tasks: TaskInterface[];
}

export interface TaskProps {
  key: string;
  taskName: string;
  subtasks: SubtaskInterface[];
}

interface SubtaskInterface {
  title: string;
  isCompleted: boolean;
}

interface TaskInterface {
  title: string;
  description: string;
  status: string;
  subtasks: SubtaskInterface[];
}

interface BoardColumnInterface {
  name: string;
  tasks: TaskInterface[];
}

export interface BoardInterface {
  name: string;
  columns: BoardColumnInterface[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface ModalsProps {
  isLight: boolean;
  onClose: () => void;
}

export interface OptionsProps {
  onClose: () => void;
  isLight: boolean;
  openModal: () => void;
}
