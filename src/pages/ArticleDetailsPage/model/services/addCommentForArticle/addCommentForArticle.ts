import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchCommentsArticleById,
} from '../fetchCommentsArticleById/fetchCommentsArticleById'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { type Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'

export const addCommentForArticle =
  createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'article/addCommentForArticle',
    async (
      text,
      thunkApi
    ) => {
      const {
        extra,
        dispatch,
        rejectWithValue,
        getState,
      } = thunkApi

      const userData = getUserAuthData(getState())
      const article = getArticleDetailsData(getState())

      if (
        !userData ||
        !text ||
        !article
      ) {
        return rejectWithValue('error')
      }

      try {
        const response = await extra.api.post<Comment>(
          '/comments',
          {
            articleId: article.id,
            text,
            userId: userData.id,
          }
        )

        if (!response.data) {
          throw new Error()
        }

        dispatch(fetchCommentsArticleById(article.id))

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
