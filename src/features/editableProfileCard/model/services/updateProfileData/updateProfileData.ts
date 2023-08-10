import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { ValidateProfileError } from '../../const/consts'
import { type Profile } from '@/entities/Profile'
import { type ThunkConfig } from '@/app/providers/StoreProvider'

export const updateProfileData =
  createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkApi

      const formData = getProfileForm(getState())

      const errors = validateProfileData(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }

      try {
        const response = await extra.api.put<Profile>(
          `/profile/${formData?.id || ''}`,
          formData
        )

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        return rejectWithValue([ValidateProfileError.INTERNAL_SERVER_ERROR])
      }
    }
  )
