import { createSlice } from '@reduxjs/toolkit';
import { signup } from './auth-operations';
import { store } from '../store';
import { handlePending, handleRejected } from '../shared/functions/redux';

const authInitialState = {
  user: {},
  token: null,
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = payload.user;
        state.token = payload.token;
        store.isLoading = false;
        store.isLogin = true;
      })
      .addCase(signup.rejected, handleRejected);
  },
});

export default authSlice.reducer;
