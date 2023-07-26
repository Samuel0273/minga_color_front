import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "../redux/reducers/mangas.js";
import mangaReducer from "./reducers/mangaReducer.js";
import authReducer from "./reducers/auth.js";

const store = configureStore({
  reducer: {
    mangas: mangasReducer,
    manga: mangaReducer,
    auth: authReducer,
  },
})

export default store;