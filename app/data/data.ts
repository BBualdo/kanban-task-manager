import { BoardInterface } from "@/ts/types";

const DUMMY_BOARDS: BoardInterface[] = [
  {
    id: 0,
    name: "Platform Launch",
    content: {
      todo: ["Task 1", "Task 2", "Task 3"],
      doing: ["Task 4", "Task 5", "Task 6"],
      done: ["Task 7", "Task 8", "Task 9"],
    },
  },
  {
    id: 1,
    name: "Marketing Plan",
    content: {
      todo: ["Task 1", "Task 2", "Task 3"],
      doing: ["Task 4", "Task 5", "Task 6"],
      done: ["Task 7", "Task 8", "Task 9"],
    },
  },
  {
    id: 2,
    name: "Roadmap",
    content: {
      todo: ["Task 1", "Task 2", "Task 3"],
      doing: ["Task 4", "Task 5", "Task 6"],
      done: ["Task 7", "Task 8", "Task 9"],
    },
  },
];

export default DUMMY_BOARDS;
