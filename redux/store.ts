import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme-slice";
import sidebarReducer from "./features/sidebar-slice";
import boardReducer from "./features/board-slice";
import modalReducer from "./features/modal-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    themeReducer,
    sidebarReducer,
    boardReducer,
    modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
