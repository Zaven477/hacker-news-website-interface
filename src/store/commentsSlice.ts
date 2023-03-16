import { createSlice } from "@reduxjs/toolkit";
import { ICommentsItem } from "./types";

export type TCommentsItemState = {
  commentsItem: ICommentsItem[];
  loading: boolean;
  errors: string;
};

const initialState: TCommentsItemState = {
  commentsItem: [],
  loading: false,
  errors: "",
};

const commentsItemSlice = createSlice({
  name: "commentsItem",
  initialState,
  reducers: {
    setCommentsItem: (state, action) => {
      state.commentsItem = action.payload;
    },
    setLoadingCommentsItem: (state, action) => {
      state.loading = action.payload;
    },
    setErrorsCommentsItem: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const {
  setCommentsItem,
  setLoadingCommentsItem,
  setErrorsCommentsItem,
} = commentsItemSlice.actions;

export default commentsItemSlice.reducer;
