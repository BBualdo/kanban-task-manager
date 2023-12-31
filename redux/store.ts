import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme-slice";
import sidebarReducer from "./features/sidebar-slice";
import selectedBoardReducer from "./features/selected-board-slice";
import addBoardModalReducer from "./features/add-board-slice";
import deleteBoardModalReducer from "./features/confirm-delete-board-slice";
import selectedTaskReducer from "./features/selected-task-slice";
import taskDetailsModalReducer from "./features/task-details-slice";
import editBoardModalReducer from "./features/edit-board-slice";
import addTaskModalReducer from "./features/add-task-slice";
import deleteTaskModalReducer from "./features/confirm-delete-task-slice";
import editTaskModalReducer from "./features/edit-task-slice";
import mobileSidebarReducer from "./features/mobile-sidebar-slice";
import isLoggedInReducer from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    themeReducer,
    sidebarReducer,
    selectedBoardReducer,
    addBoardModalReducer,
    deleteBoardModalReducer,
    selectedTaskReducer,
    taskDetailsModalReducer,
    editBoardModalReducer,
    addTaskModalReducer,
    deleteTaskModalReducer,
    editTaskModalReducer,
    mobileSidebarReducer,
    isLoggedInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
