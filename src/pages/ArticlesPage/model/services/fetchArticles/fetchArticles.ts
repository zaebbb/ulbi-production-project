import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchArticles =
  createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.get<Article[]>(
          '/articles', {
            params: {
              _expand: 'user',
            },
          }
        )

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
