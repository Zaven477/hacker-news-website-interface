import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNews, getNewsById } from "../api";
import { setErrors, setLoading, setNews } from "./newsSlice";

export const fetchNews = createAsyncThunk("news", async (_, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await getNews();

    const promises = response.map(async (id: number) => {
      const result = await getNewsById(id);
      return result.data;
    });

    const news = await Promise.all(promises);
    dispatch(setNews(news));
    dispatch(setLoading(false));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setLoading(false));
      dispatch(setErrors(error.message));
    }
  }
});
