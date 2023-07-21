import { createReducer } from '@reduxjs/toolkit';
import { loadAuthorAdmin, changeAuthorRole} from '../actions/adminActions.js';

const initialState = {
  activeAuthors: [],
  inactiveAuthors: [],
  loading: false,
  error: null,
};

const adminReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAuthorAdmin.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loadAuthorAdmin.fulfilled, (state, action) => {
      state.activeAuthors = action.payload.activeAuthors;
      state.inactiveAuthors = action.payload.inactiveAuthors;
      state.loading = false;
      state.error = null;
    })
    .addCase(loadAuthorAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

    .addCase(changeAuthorRole.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(changeAuthorRole.fulfilled, (state, action) => {
      const { updatedActiveAuthors, updatedInactiveAuthors } = action.payload;
      state.activeAuthors = updatedActiveAuthors;
      state.inactiveAuthors = updatedInactiveAuthors;
      state.loading = false;
      state.error = null;
    })


    .addCase(changeAuthorRole.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
});

export default adminReducer;