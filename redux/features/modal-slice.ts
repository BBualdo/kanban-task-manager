import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  name: "modal-visibility",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      return {
        value: {
          isShown: action.payload,
        },
      };
    },
  },
});

export const { showModal } = modalVisibility.actions;
export default modalVisibility.reducer;
