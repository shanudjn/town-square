import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router";
import { baseUrl } from "../../api/api";


export const loginUserWithCredentials = createAsyncThunk(
    'user/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const loginResponse = await axios({
                method: 'POST',
                url: baseUrl + 'login',
                data: {
                    user: {
                        username: username,
                        password: password
                    }
                }
            })
            // console.log(username, password)
            // console.log(loginResponse)
            if (loginResponse.status === 200) {
                localStorage?.setItem("login", JSON.stringify({ isUserLogIn: true, token: loginResponse.data.token }))

                return loginResponse.data;
            }

        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)
export const getUserProfile = createAsyncThunk('user/userprofile', async (token) => {
    const getUserProfileResponse = await axios({
        method: 'GET',
        url: baseUrl + 'user',

        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    // console.log(getUserProfileResponse);
    return getUserProfileResponse.data;
})

export const getUserTweets = createAsyncThunk('user/userTweets', async (token) => {
    const getUserTweetsResponse = await axios({

        method: 'GET',
        url: baseUrl + 'profile/tweets',

        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    // console.log(getUserTweetsResponse);
    return getUserTweetsResponse.data;


})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
        isUserLoggedIn: false,
        userId: '',
        userProfile: {},
        userProfileStatus: "idle",
        userTweets: [],
        userTweetsStatus: "idle"

    },
    reducers: {

    },
    extraReducers: {
        [loginUserWithCredentials.pending]: (state, action) => {

            state.isUserLoggedIn = false
            state.isLoading = true
        },
        [loginUserWithCredentials.fulfilled]: (state, action) => {
            state.isUserLoggedIn = true
            state.token = action.payload.token
            // state.user = { userId: action.payload.userId, username: action.payload.username }
            state.userId = action.payload.userId

        },
        [loginUserWithCredentials.rejected]: (state, action) => {
            // console.log("rejected")
            state.isUserLoggedIn = false

        },
        [getUserProfile.fulfilled]: (state, action) => {
            // console.log("getting user profile success");
            // console.log(action.payload)
            state.userProfile = action.payload.userProfile
        },
        [getUserTweets.fulfilled]: (state, action) => {
            // console.log("getting user tweets success");
            // console.log(action.payload)
            state.userTweets = action.payload.findTweetsByUser
        }
    }

})
export const { loginButtonPressed } = userSlice.actions;

export default userSlice.reducer