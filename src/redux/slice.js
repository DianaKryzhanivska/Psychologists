import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = slice.actions;
export const psychologistsReducer = slice.reducer;
