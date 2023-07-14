import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "../redux/reducers/mangas.js";


const store = configureStore({
  reducer: {
    mangas: mangasReducer,
  },
})

export default store;