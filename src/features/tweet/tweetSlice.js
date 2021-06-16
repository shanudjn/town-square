import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseUrl } from "../../api/api";


export const fetchTweets = createAsyncThunk('tweets/fetchTweets', async (token) => {

    // console.log("Fetching Tweets")
    // console.log("Token", token)
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

export const postTweet = createAsyncThunk('tweets/postTweet', async ({ tweet, token }) => {
    // console.log(tweet, token)
    const postTweetResponse = await axios({
        method: 'POST',
        url: baseUrl + 'tweet',
        data: {
            tweet: tweet
        },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    console.log(postTweetResponse);
    return postTweetResponse.data
})

export const upvoteTweet = createAsyncThunk('tweet/upvoteTweet', async ({ upvoters, tweetId, token }) => {
    console.log(upvoters, tweetId)
    const upvoteTweetResponse = await axios({
        method: 'POST',
        url: baseUrl + `tweet/upvote/${tweetId}`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    console.log(upvoteTweetResponse)
    return upvoteTweetResponse.data
})
export const removeUpvote = createAsyncThunk('tweet/removeupvote', async ({ upvoters, tweetId, token }) => {
    console.log(tweetId, token)
    const removeUpvoteResponse = await axios({
        method: "DELETE",
        url: baseUrl + `tweet/upvote/${tweetId}`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    console.log(removeUpvoteResponse)
    return removeUpvoteResponse.data
})

export const downvoteTweet = createAsyncThunk('tweet/downvoteTweet', async ({ downvoters, tweetId, token }) => {
    console.log(downvoters, tweetId)
    const downvoteTweetResponse = await axios({
        method: 'POST',
        url: baseUrl + `tweet/downvote/${tweetId}`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    console.log(downvoteTweetResponse)
    return downvoteTweetResponse.data
})
export const removeDownvote = createAsyncThunk('tweet/removedownvote', async ({ downvoters, tweetId, token }) => {
    console.log(tweetId, token)
    const removeDownvoteResponse = await axios({
        method: "DELETE",
        url: baseUrl + `tweet/downvote/${tweetId}`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    console.log(removeDownvoteResponse)
    return removeDownvoteResponse.data
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
        [postTweet.fulfilled]: (state, action) => {
            console.log("Success Posting Tweet")
            console.log(action.payload)
            state.tweets.unshift(action.payload.newTweet)

        },
        [postTweet.rejected]: (state, action) => {
            console.log("Failed Posting Tweet")
            console.log(action.payload)
        },
        [upvoteTweet.fulfilled]: (state, action) => {
            console.log("successs in upvoting tweet");
            console.log(action.payload.tweetToUpvote._id)
            const upvotedTweetIndex = state.tweets.findIndex((tweet) => tweet._id === action.payload.tweetToUpvote._id);
            console.log(upvotedTweetIndex)
            state.tweets[upvotedTweetIndex].noOfUpvotes += 1
            state.tweets[upvotedTweetIndex].upvoters.push(action.payload.userId)

        },
        [upvoteTweet.rejected]: (state, action) => {
            console.log("failed in upvoting tweet")

        },
        [removeUpvote.fulfilled]: (state, action) => {
            console.log("succes in removing upvote");
            console.log(action.payload)
            const indexOfRemovedTweet = state.tweets.findIndex((tweet) => tweet._id === action.payload.tweet._id)
            state.tweets[indexOfRemovedTweet].noOfUpvotes -= 1
            const indexOfRemovedUpvoter = state.tweets[indexOfRemovedTweet].upvoters.findIndex((upvoter) => upvoter === action.payload.userId)
            console.log(indexOfRemovedUpvoter)
            state.tweets[indexOfRemovedTweet].upvoters.splice(indexOfRemovedUpvoter, 1)
        },
        [removeUpvote.rejected]: (state, action) => {
            console.log("failure in removing upvote");

        },
        [downvoteTweet.fulfilled]: (state, action) => {
            console.log("successs in downvoting tweet");
            console.log(action.payload.tweet._id)
            const downvotedTweetIndex = state.tweets.findIndex((tweet) => tweet._id === action.payload.tweet._id);
            console.log(downvotedTweetIndex)
            state.tweets[downvotedTweetIndex].noOfDownVotes += 1
            state.tweets[downvotedTweetIndex].downvoters.push(action.payload.userId)

        },
        [downvoteTweet.rejected]: (state, action) => {
            console.log("failed in downvoting tweet")

        },
        [removeDownvote.fulfilled]: (state, action) => {
            console.log("succes in removing downvote");
            console.log(action.payload)
            const indexOfRemovedTweet = state.tweets.findIndex((tweet) => tweet._id === action.payload.tweet._id)
            state.tweets[indexOfRemovedTweet].noOfDownVotes -= 1
            const indexOfRemovedDownvoter = state.tweets[indexOfRemovedTweet].downvoters.findIndex((downvoter) => downvoter === action.payload.userId)
            console.log(indexOfRemovedDownvoter)
            state.tweets[indexOfRemovedTweet].downvoters.splice(indexOfRemovedDownvoter, 1)
        },
        [removeDownvote.rejected]: (state, action) => {
            console.log("failure in removing upvote");

        },

    }
})

export default tweetSlice.reducer;