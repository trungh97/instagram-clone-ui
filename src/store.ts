import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "@redux/slices/imageSlice";
import authReducer from "@redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    image: imageReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
