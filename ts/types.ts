import { ReactNode } from "react";

export interface SubtaskProps {
  subtasks: SubtaskInterface[];
}

export interface DropdownProps {
  isLight: boolean;
  statuses: BoardColumnInterface[];
  selectedStatus: string;
  changeStatus: (status: string) => void;
}

export interface ColumnProps {
  key: string;
  columns: BoardColumnInterface[];
  columnName: string;
  tasks: TaskInterface[];
}

export interface TaskProps {
  selectTask: () => void;
  key: string;
  taskName: string;
  subtasks: SubtaskInterface[];
}

export interface SubtaskInterface {
  title: string;
  isCompleted: boolean;
}

export interface TaskInterface {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: SubtaskInterface[];
}

export interface BoardColumnInterface {
  name: string;
  tasks: TaskInterface[];
}

export interface BoardInterface {
  id: string;
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
  openDeleteBoardModal: () => void;
  openEditBoardModal: () => void;
}
