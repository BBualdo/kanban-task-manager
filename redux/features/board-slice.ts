import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import boards from "@/app/data/data";
import { BoardInterface } from "@/ts/types";

type InitialState = {
  value: SelectedBoard;
};

type SelectedBoard = {
  selectedBoard: BoardInterface;
};

const initialState = {
  value: {
    selectedBoard: boards[0],
  } as SelectedBoard,
} as InitialState;

export const selectedBoard = createSlice({
  name: "selected-board",
  initialState,
  reducers: {
    switchBoard: (state, action: PayloadAction<BoardInterface>) => {
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
