import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "./redux/reducers/chapters";
import usersReducer from "./redux/reducers/users";

const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    users: usersReducer,
  },
});

export default store;
