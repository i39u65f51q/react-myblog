import { createSlice } from '@reduxjs/toolkit';
import { Posts } from '../../data/Posts';

const initialPostState = Posts;

const postSlice = createSlice({
  name: 'posts',
  initialState: initialPostState,
  reducers: {
    test: (state, action) => {
      console.log('test');
    },
  },
});

export const postsReducer = postSlice.reducer;
export const postsActions = postSlice.actions;
