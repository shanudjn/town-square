import { configureStore } from '@reduxjs/toolkit';
import tweetSliceReducer from '../features/tweet/tweetSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetSliceReducer,
  },
});

export default store;
