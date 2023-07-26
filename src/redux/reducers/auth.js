import { createReducer } from "@reduxjs/toolkit";
import { setAuthId } from "../actions/auth.js"

const initialState = {

    author_id: [],
  };
  
  const authReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(setAuthId, (state, action) => {
        console.log('PAYLOAD', action)
        console.log(action.payload)
        let newState = {
          ...state,
          author_id: action.payload
      }
      console.log('AUTH REDUCER FIN >>>', author_id)
      return newState
        

      })
  });


  export default authReducer;