import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article, ArticleView } from 'entities/Article'
import { type ArticlesPageSchema } from '../../types/articlesPageSchema'
import { fetchArticles } from '../../services/fetchArticles/fetchArticles'
import { LOCAL_STORAGE_ARTICLE_VIEW } from '../../types/articlesPage'

const articlesPageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticles =
  articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState()
  )

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(
        LOCAL_STORAGE_ARTICLE_VIEW,
        action.payload
      )
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchArticles.pending,
        (
          state
        ) => {
          state.error = undefined
          state.isLoading = true
        }
      )
      .addCase(
        fetchArticles.fulfilled,
        (
          state,
          action: PayloadAction<Article[]>
        ) => {
          state.isLoading = false
          articlesPageAdapter.addMany(state, action.payload)
          state.hasMore = action.payload.length > 0
        }
      )
      .addCase(
        fetchArticles.rejected,
        (
          state,
          action
        ) => {
          state.isLoading = false
          state.error = action.payload
        }
      )
  },
})

export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice