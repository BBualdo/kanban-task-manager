import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import DUMMY_BOARDS from "@/app/data/data";
import { BoardInterface } from "@/ts/types";

type InitialState = {
  value: SelectedBoard;
};

type SelectedBoard = {
  selectedBoard: BoardInterface;
};

const initialState = {
  value: {
    selectedBoard: DUMMY_BOARDS[0],
  } as SelectedBoard,
} as InitialState;

export const selectedBoard = createSlice({
  name: "selected-board",
  initialState,
  reducers: {
    switchBoard: (state, action: PayloadAction<BoardInterface | any>) => {
      return {
        value: {
          selectedBoard: action.payload,
        },
      };
    },
  },
});

export const { switchBoard } = selectedBoard.actions;
export default selectedBoard.reducer;
