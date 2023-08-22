import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    name: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
        },
        removeUserInfo: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
        },
    },
})


export default userSlice.reducer
export const { setUserInfo, removeUserInfo } = userSlice.actions