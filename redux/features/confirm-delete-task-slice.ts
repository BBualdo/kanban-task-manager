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

export const modalVisibility = createSlice({
  name: "delete-task-modal-visibility",
  initialState,
  reducers: {
    showDeleteTaskModal(state, action: PayloadAction<boolean>) {
      return {
        value: {
          isShown: action.payload,
        },
      };
    },
  },
});

export const { showDeleteTaskModal } = modalVisibility.actions;
export default modalVisibility.reducer;
