import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User, userActions } from 'entities/User'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername =
  createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (
      authData,
      thunkAPI
    ) => {
      try {
        const response = await axios.post<User>(
          'http://localhost:8000/login',
          authData
        )

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
        thunkAPI.dispatch(userActions.setAuthData(response.data))

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        return thunkAPI.rejectWithValue('error')
      }
    }
  )
