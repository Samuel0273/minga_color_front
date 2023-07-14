import { createAction } from "@reduxjs/toolkit";

export const setDataUser = createAction(
  "set_data_user",
  (email, user, token) => {
    return {
      payload: { email, user, token },
    };
  }
);
