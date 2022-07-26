import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/PostSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
