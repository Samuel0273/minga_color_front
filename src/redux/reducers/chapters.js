import { createReducer } from "@reduxjs/toolkit";
import {
  setDataChapter,
  setNextChapterId,
  setPageCounter,
} from "../actions/chapters";

const initialState = {
  pageCounter: 0,
  nextChapterId: "",
  number: "",
  title: "",
  prueba: "",
};

const chaptersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataChapter, (state, action) => {
      state.number = action.payload.number;
      state.title = action.payload.title;
    })
    .addCase(setNextChapterId, (state, action) => {
      state.nextChapterId = action.payload || null;
    })
    .addCase(setPageCounter, (state, action) => {
      state.pageCounter = action.payload;
    });
});

export default chaptersReducer;
