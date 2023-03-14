import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNews, getNewsById } from "../api";
import { setNews } from "./newsSlice";

export const fetchNews = createAsyncThunk("news", async (_, { dispatch }) => {
  const response = await getNews();

  const promises = response.map(async (id: number) => {
    const result = await getNewsById(id);
    return result.data;
  });

  const news = await Promise.all(promises);
  dispatch(setNews(news));
});
