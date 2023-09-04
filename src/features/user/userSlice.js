import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    name: '',
    profile: {}
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
        setProfile: (state, action) => {
            state.profile = action.payload
        }
    },
})


export default userSlice.reducer
export const { setUserInfo, removeUserInfo, setProfile } = userSlice.actions