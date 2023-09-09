import { createAsyncThunk } from '@reduxjs/toolkit'
import { setJsonSettingsMutation } from '../../api/userApi'
import { getJsonSetting } from '../selectors/getJsonSettings'
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData'
import { type JsonSettings } from '../types/jsonSettings'
import { type ThunkConfig } from '@/app/providers/StoreProvider'

export const saveJsonSettings =
  createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
    'user/saveJsonSettings',
    async (
      newJsonSettings,
      thunkApi
    ) => {
      const {
        rejectWithValue,
        getState,
        dispatch,
      } = thunkApi
      const userData = getUserAuthData(getState())
      const currentSettings = getJsonSetting(getState())

      if (!userData) {
        return rejectWithValue('error')
      }

      try {
        const response = await dispatch(setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings,
          },
        })).unwrap()

        if (!response.jsonSettings) {
          return rejectWithValue('error')
        }

        return response.jsonSettings
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
