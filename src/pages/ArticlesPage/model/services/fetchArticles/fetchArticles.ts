import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { getArticlePageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticles =
  createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (
      props,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkApi

      const {
        page = 1,
      } = props
      const limit = getArticlePageLimit(getState())

      try {
        const response = await extra.api.get<Article[]>(
          '/articles', {
            params: {
              _expand: 'user',
              _page: page,
              _limit: limit,
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
