import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type User, userActions } from '@/entities/User'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername =
  createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (
      authData,
      thunkApi
    ) => {
      const {
        extra,
        dispatch,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.post<User>(
          '/login',
          authData
        )

        if (!response.data) {
          throw new Error()
        }

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
        dispatch(userActions.setAuthData(response.data))

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
