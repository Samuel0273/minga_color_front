import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "./redux/reducers/chapters";
import usersReducer from "./redux/reducers/users";
import mangasReducer from './redux/reducers/mangas';
import authReducer from "./redux/reducers/auth";

const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    users: usersReducer,
    manga: mangasReducer,
    auth: authReducer,
  },
});

export default store;
