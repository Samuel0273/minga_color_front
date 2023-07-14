import { createReducer } from "@reduxjs/toolkit";
import { setDataUser } from "../actions/users";

const initialState = {
  email: "",
  user: "",
  password: "",
  token: "",
};

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setDataUser, (state, action) => {
    state.email = action.payload.email;
    state.user = action.payload.user;
    state.password = action.payload.password;
    state.token = action.payload.token;
  });
});

export default usersReducer;
