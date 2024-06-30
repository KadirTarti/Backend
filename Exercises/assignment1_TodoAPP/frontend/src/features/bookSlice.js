import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  booksList: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = false;
    },
    getSuccessBook(state, action) {
      state.loading = false;
      state.error = false;
      state.booksList = action.payload;
    },
    fetchFail(state) {
      state.loading = false;
      state.error = true;
    },
  },
});