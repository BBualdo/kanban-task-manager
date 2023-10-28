import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: ThemeState;
};

type ThemeState = {
  isLightTheme: boolean;
};

const initialState = {
  value: {
    isLightTheme: true,
  } as ThemeState,
} as InitialState;

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value.isLightTheme = !state.value.isLightTheme;
    },
  },
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;
