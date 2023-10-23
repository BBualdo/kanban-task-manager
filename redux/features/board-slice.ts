import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "../../app/data/data.json";
import { BoardInterface } from "@/ts/types";

type InitialState = {
  value: SelectedBoard;
};

type SelectedBoard = {
  selectedBoard: BoardInterface;
};

const initialState = {
  value: {
    selectedBoard: data.boards[0],
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
