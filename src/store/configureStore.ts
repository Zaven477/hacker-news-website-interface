import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import newsItemReducer from "./newsItemSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    newsItem: newsItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
