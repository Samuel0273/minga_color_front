import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./reducers/manga.js";

const store = configureStore({
  reducer: {
    manga: mangaReducer
  },
})

export default store;