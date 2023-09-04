import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'register',
                    method: 'POST',
                    body: user,
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": 'application/json',
                    }
                }
            }
        }),
        loginUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'login',
                    method: 'POST',
                    body: user,
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": 'application/json',
                    }
                }
            }
        }),
        logoutUser: builder.mutation({
            query: ({ token }) => {
                return {
                    url: 'logout',
                    method: 'POST',
                    body: {},
                    headers: {
                        "authorization": `Bearer ${token}`
                    }
                }
            }
        }),
        getLoggedUser: builder.query({
            query: (token) => {
                return {
                    url: 'user',
                    method: 'GET',
                    headers: {
                        "authorization": `Bearer ${token}`
                    }
                }
            }
        }),
        changePassword: builder.mutation({
            query: ({ updatePassword, token }) => {
                return {
                    url: 'change-password',
                    method: 'POST',
                    body: updatePassword,
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": 'application/json',
                        "authorization": `Bearer ${token}`
                    }
                }
            }
        }),
        updateProfile: builder.mutation({
            query: ({ updatedProfileInfo, token }) => {
                return {
                    url: 'profile',
                    method: 'POST',
                    body: updatedProfileInfo,
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": 'application/json',
                        "authorization": `Bearer ${token}`
                    }
                }
            }
        }),
        getLoggedUserProfile: builder.query({
            query: (token) => {
                return {
                    url: 'profile-data',
                    method: 'GET',
                    headers: {
                        "authorization": `Bearer ${token}`
                    }
                }
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useGetLoggedUserQuery, useChangePasswordMutation, useUpdateProfileMutation, useGetLoggedUserProfileQuery } = userAuthApi