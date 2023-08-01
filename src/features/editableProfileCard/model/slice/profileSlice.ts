import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile } from 'entities/Profile'
import { type ProfileSchema } from '../types/editableProfileCardSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
      state.validate = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProfileData.pending,
        (
          state
        ) => {
          state.isLoading = true
        }
      )
      .addCase(
        fetchProfileData.fulfilled,
        (
          state,
          action: PayloadAction<Profile>
        ) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
        }
      )
      .addCase(
        fetchProfileData.rejected,
        (
          state,
          action
        ) => {
          state.isLoading = false
          state.error = action.payload
        }
      )
      .addCase(
        updateProfileData.pending,
        (
          state
        ) => {
          state.validate = undefined
          state.isLoading = true
        }
      )
      .addCase(
        updateProfileData.fulfilled,
        (
          state,
          action: PayloadAction<Profile>
        ) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
          state.readonly = true
          state.validate = undefined
        }
      )
      .addCase(
        updateProfileData.rejected,
        (
          state,
          action
        ) => {
          state.isLoading = false
          state.validate = action.payload
        }
      )
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice