import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchRecommendations } from '../services/fetchRecommendations/fetchRecommendations'
import {
  type ArticleDetailsRecommendationsSchema,
} from '../types/articleDetailsRecommendationsSchema'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Article } from '@/entities/Article'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
  )

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRecommendations.pending,
        (
          state
        ) => {
          state.error = undefined
          state.isLoading = true
        }
      )
      .addCase(
        fetchRecommendations.fulfilled,
        (
          state,
          action: PayloadAction<Article[]>
        ) => {
          state.isLoading = false
          recommendationsAdapter.setAll(state, action.payload)
        }
      )
      .addCase(
        fetchRecommendations.rejected,
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

export const {
  actions: articleDetailsRecommendationsActions,
} = articleDetailsRecommendationsSlice
export const {
  reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice
