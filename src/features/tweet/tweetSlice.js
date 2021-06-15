import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseUrl } from "../../api/api";


export const fetchTweets = createAsyncThunk('tweets/fetchTweets', async (token) => {

    console.log("Fetching Tweets")
    console.log("Token", token)
    const fetchTweetsResponse = await axios({
        method: 'GET',
        url: baseUrl + 'tweets',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
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