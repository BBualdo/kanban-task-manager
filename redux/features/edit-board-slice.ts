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
  name: "edit-board-modal-visibility",
  initialState,
  reducers: {
    showEditBoardModal: (state, action: PayloadAction<boolean>) => {
      return {
        value: {
          isShown: action.payload,
        },
      };
    },
  },
});

export const { showEditBoardModal } = modalVisibility.actions;
export default modalVisibility.reducer;
