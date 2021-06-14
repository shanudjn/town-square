import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: "hello",
        isUserLoggedIn: false
    },
    reducers: {
        loginButtonPressed: (username, password) => {
            console.log("button clicked", username, password)
        }
    }

})
export const { loginButtonPressed } = userSlice.actions;

export default userSlice.reducer