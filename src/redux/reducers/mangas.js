import { createReducer } from "@reduxjs/toolkit";
import {
  setFilters,
  setCategories,
  setMangas,
  setPagination,
  captureText,
  captureChecks,
} from "../actions/mangas.js";

const initialState = {
  filters: {
    title: "",
    categoriesSelected: [],
    page: 1,
  },
  categories: [],
  mangas: [],
  pagination: {},
};

const mangasReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilters, (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    })
    .addCase(setCategories, (state, action) => {
      state.categories = action.payload;
    })
    .addCase(setMangas, (state, action) => {
      state.mangas = action.payload;
    })
    .addCase(setPagination, (state, action) => {
      state.pagination = action.payload;
    })
    .addCase(captureText, (state, action) => {
      state.filters.title = action.payload;
    })
    .addCase(captureChecks, (state, action) => {
      state.filters.categoriesSelected = action.payload;
    });
});

export default mangasReducer;