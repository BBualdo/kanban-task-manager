import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme-slice";
import sidebarReducer from "./features/sidebar-slice";
import boardReducer from "./features/board-slice";
import addBoardModalReducer from "./features/add-board-slice";
import deleteBoardModalReducer from "./features/confirm-delete-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    themeReducer,
    sidebarReducer,
    boardReducer,
    addBoardModalReducer,
    deleteBoardModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
