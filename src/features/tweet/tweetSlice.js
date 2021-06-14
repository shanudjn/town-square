import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTweets = createAsyncThunk('tweets/fetchTweets', async () => {
    const fetchTweetsResponse = await axios.get('http://localhost:8080/api/tweets');
    console.log(fetchTweetsResponse)
    return fetchTweetsResponse.data
})

export const tweetSlice = createSlice({
    name: 'tweets',
    initialState: {
        status: "idle",
        tweets: [],
    },
    reducers: {},
    extraReducers: {
        [fetchTweets.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchTweets.fulfilled]: (state, action) => {
            state.tweets = action.payload.tweets
            state.status = 'succeeded'

        },
        [fetchTweets.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },

    }
})

export default tweetSlice.reducer;