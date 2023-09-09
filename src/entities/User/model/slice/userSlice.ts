import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initAuthData } from '../services/initAuthData'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { type JsonSettings } from '../types/jsonSettings'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localstorage'
import { setFeatureFlags } from '@/shared/lib/features'

const initialState: UserSchema = {
  _mounted: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      setFeatureFlags(action.payload.features)

      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        action.payload.id
      )
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
      state.authData = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveJsonSettings.fulfilled,
        (
          state,
          action: PayloadAction<JsonSettings>
        ) => {
          if (state.authData) {
            state.authData.jsonSettings = action.payload
          }
        }
      )
      .addCase(
        initAuthData.fulfilled,
        (
          state,
          action: PayloadAction<User>
        ) => {
          state.authData = action.payload
          setFeatureFlags(action.payload.features)
          state._mounted = true
        }
      )
      .addCase(
        initAuthData.rejected,
        (
          state
        ) => {
          state._mounted = true
        }
      )
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
