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
  name: "delete-board-modal-visibility",
  initialState,
  reducers: {
    showDeleteBoardModal(state, action: PayloadAction<boolean>) {
      return {
        value: {
          isShown: action.payload,
        },
      };
    },
  },
});

export const { showDeleteBoardModal } = modalVisibility.actions;
export default modalVisibility.reducer;
