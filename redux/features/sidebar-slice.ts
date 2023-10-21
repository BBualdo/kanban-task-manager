import { createSlice } from "@reduxjs/toolkit";

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
  name: "sidebar-visibility",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.value.isShown = !state.value.isShown;
    },
  },
});

export const { toggleSidebar } = sidebarVisibility.actions;
export default sidebarVisibility.reducer;
