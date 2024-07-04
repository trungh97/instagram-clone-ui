import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

type UserState = Pick<
  User,
  "displayName" | "email" | "uid" | "metadata"
> | null;

export type AuthState = {
  user: UserState;
};

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
