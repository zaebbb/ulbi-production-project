import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePagePage,
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlePageSlice/articlePageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'
import { type ThunkConfig } from '@/app/providers/StoreProvider'

export const FetchNextArticlePage =
  createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/FetchNextArticlePage',
    async (
      _,
      thunkApi
    ) => {
      const {
        getState,
        dispatch,
      } = thunkApi
      const hasMore = getArticlePageHasMore(getState())
      const isLoading = getArticlePageIsLoading(getState())
      const page = getArticlePagePage(getState())

      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1))
        dispatch(fetchArticles({}))
      }
    }
  )
