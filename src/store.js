import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "./redux/reducers/chapters";
import usersReducer from "./redux/reducers/users";
import mangasReducer from "./redux/reducers/mangas";
import adminReducer from "./redux/reducers/adminReducer";

const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    users: usersReducer,
    mangas: mangasReducer,
    admin: adminReducer,
  },
});

export default store;
