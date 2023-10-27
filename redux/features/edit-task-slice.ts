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
  name: "edit-Task-modal-visibility",
  initialState,
  reducers: {
    showEditTaskModal: (state, action: PayloadAction<boolean>) => {
      return {
        value: {
          isShown: action.payload,
        },
      };
    },
  },
});

export const { showEditTaskModal } = modalVisibility.actions;
export default modalVisibility.reducer;
