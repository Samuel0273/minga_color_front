import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "./redux/reducers/chapters";
import usersReducer from "./redux/reducers/users";
import mangaReducer from "./redux/reducers/manga.js";
import mangasReducer from "./redux/reducers/manga.js";

const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    users: usersReducer,
    manga: mangaReducer,
    mangas: mangasReducer
  },
});

export default store;
