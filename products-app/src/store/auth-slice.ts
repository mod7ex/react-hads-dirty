import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',

    initialState: { isLoggedIn: false },

    reducers: {
        login(state) { state.isLoggedIn = true },
        logOut(state) { state.isLoggedIn = false }
    }
})

export const authActions = authSlice.actions

export type AuthState = ReturnType<typeof authSlice.getInitialState>

export default authSlice