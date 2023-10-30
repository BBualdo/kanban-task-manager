import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isLoggedIn: boolean;
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isLoggedIn: false,
  } as AuthState,
} as InitialState;

const userAuth = createSlice({
  name: "user-authentication",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      return {
        value: {
          isLoggedIn: action.payload,
        },
      };
    },
  },
});

export const { setIsLoggedIn } = userAuth.actions;
export default userAuth.reducer;
