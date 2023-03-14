import { createSlice } from "@reduxjs/toolkit";
import { INews } from "./types";

export type TNewsItemState = {
  newsItem: INews | null;
  loading: boolean;
  errors: string;
};

const initialState: TNewsItemState = {
  newsItem: null,
  loading: false,
  errors: "",
};

const newsItemSlice = createSlice({
  name: "newsItem",
  initialState,
  reducers: {
    setNewsItem: (state, action) => {
      state.newsItem = action.payload;
    },
    setLoadingItem: (state, action) => {
      state.loading = action.payload;
    },
    setErrorsItem: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setNewsItem, setLoadingItem, setErrorsItem } =
  newsItemSlice.actions;

export default newsItemSlice.reducer;
