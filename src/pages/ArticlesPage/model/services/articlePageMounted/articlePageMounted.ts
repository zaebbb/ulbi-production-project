import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlePageMounted,
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlePageSlice/articlePageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const ArticlePageMounted =
  createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/ArticlePageMounted',
    async (
      _,
      thunkApi
    ) => {
      const {
        getState,
        dispatch,
      } = thunkApi

      const _mounted = getArticlePageMounted(getState())

      if (!_mounted) {
        dispatch(articlesPageActions.initState())
        dispatch(fetchArticles({
          page: 1,
        }))
      }
    }
  )
