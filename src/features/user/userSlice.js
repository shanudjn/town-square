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
            console.log(username, password)
            console.log(loginResponse)
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

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
        isUserLoggedIn: false,
        status: ""
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
            state.status = "SUCCESS"
        },
        [loginUserWithCredentials.rejected]: (state, action) => {
            console.log("rejected")
            state.isUserLoggedIn = false
            state.status = "FAILED"
        }
    }

})
export const { loginButtonPressed } = userSlice.actions;

export default userSlice.reducer