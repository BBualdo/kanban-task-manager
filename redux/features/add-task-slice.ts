import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: ModalState;
};

type ModalState = {
  isShown: boolean;
};

const initialState = {
  value: {
    isShown: false,
  } as ModalState,
} as InitialState;

const modalVisibility = createSlice({
  name: "add-task-modal-visibility",
  initialState,
  reducers: {
    showAddTaskModal: (state, action: PayloadAction<boolean>) => {
      return {
        value: {
          isShown: action.payload,
        },
      };
    },
  },
});

export const { showAddTaskModal } = modalVisibility.actions;
export default modalVisibility.reducer;
