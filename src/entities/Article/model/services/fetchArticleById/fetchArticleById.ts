import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from '../../types/article'
import { type ThunkConfig } from '@/app/providers/StoreProvider'

export const fetchArticleById =
  createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (
      articleId,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.get<Article>(
          `/articles/${articleId}`, {
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
