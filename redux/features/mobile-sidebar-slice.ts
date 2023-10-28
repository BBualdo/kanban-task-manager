import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: SidebarState;
};

type SidebarState = {
  isShown: boolean;
};

const initialState = {
  value: {
    isShown: false,
  } as SidebarState,
} as InitialState;

export const sidebarVisibility = createSlice({
  name: "mobile-sidebar-visibility",
  initialState,
  reducers: {
    toggleMobileSidebar: (state, action: PayloadAction<boolean>) => {
      return {
        value: {
          isShown: action.payload,
        },
      };
    },
  },
});

export const { toggleMobileSidebar } = sidebarVisibility.actions;
export default sidebarVisibility.reducer;
