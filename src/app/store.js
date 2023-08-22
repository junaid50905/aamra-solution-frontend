import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from './../services/userAuthApi';
import userReducer from '../features/user/userSlice'




export const store = configureStore({
    reducer: {
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        user: userReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAuthApi.middleware),
})


setupListeners(store.dispatch)