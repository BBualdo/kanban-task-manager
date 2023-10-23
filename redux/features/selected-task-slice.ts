import { TaskInterface } from "@/ts/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: SelectedTask;
};

type SelectedTask = {
  selectedTask: TaskInterface | null;
};

const initialState = {
  value: {
    selectedTask: null,
  } as SelectedTask,
} as InitialState;

export const selectedTask = createSlice({
  name: "selected-task",
  initialState,
  reducers: {
    switchTask(state, action: PayloadAction<TaskInterface>) {
      return {
        value: {
          selectedTask: action.payload,
        },
      };
    },
  },
});

export const { switchTask } = selectedTask.actions;
export default selectedTask.reducer;
