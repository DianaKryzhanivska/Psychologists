import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  token: '',
  id: '',
  isLoggedIn: false,
  isLoading: false,
  isRefresh: true,
  error: null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    removeUser(state) {
      state.email = '';
      state.token = '';
      state.id = '';
      state.name = '';
    },
  },
});

export const { setUser, removeUser } = slice.actions;

export const authReducer = slice.reducer;
