import { ImageURLs } from "@interfaces/image";
import { allImageNames } from "@pages/SignIn/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ImageState = {
  data: ImageURLs<typeof allImageNames>;
};

const initialState: ImageState = {
  data: {},
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<ImageURLs<typeof allImageNames>>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = { ...state.data, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { save } = imageSlice.actions;

export default imageSlice.reducer;
