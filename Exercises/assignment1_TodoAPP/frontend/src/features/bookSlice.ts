import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../models/models";

// export interface Book {
//   id: number;
//   title: string;
//   author: string;
//   ISBN: number;
//   genre: string;
//   publicationYear: number;
//   image: string;
// }

// Define a type for the slice state
interface BooksState {
  loading: boolean;
  error: boolean;
  booksList: Book[];
}

// Define the initial state using that type
const initialState: BooksState = {
  loading: false,
  error: false,
  booksList: [],
};

export const booksSlice = createSlice({
  name: "books",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = false;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    getSuccessBook(state, action: PayloadAction<Book[]>) {
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

export const { fetchStart, getSuccessBook, fetchFail } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
