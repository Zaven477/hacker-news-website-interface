import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    news: [],
    loading: false,
    errors: ""
  };


  const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
      setNews: (state, action) => {
        state.news = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setErrors: (state, action) => {
        state.errors = action.payload
      }
    },
  });


  export const { setNews, setLoading, setErrors } = newsSlice.actions;

  export default newsSlice.reducer;


