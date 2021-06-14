import { configureStore } from '@reduxjs/toolkit';
import tweetSliceReducer from '../features/tweet/tweetSlice';
import userSliceReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetSliceReducer,
    user: userSliceReducer
  },
});

export default store;
