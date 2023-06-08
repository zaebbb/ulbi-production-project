import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername =
  createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (
      authData,
      thinkApi
    ) => {
      const {
        extra,
        dispatch,
        rejectWithValue,
      } = thinkApi

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

        extra.navigate('/about')

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
