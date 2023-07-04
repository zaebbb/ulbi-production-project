import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'
import {
  fetchCommentsArticleById,
} from '../services/fetchCommentsArticleById/fetchCommentsArticleById'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

export const getArticleComments =
  commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
  )

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
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
        fetchCommentsArticleById.pending,
        (
          state
        ) => {
          state.error = undefined
          state.isLoading = true
        }
      )
      .addCase(
        fetchCommentsArticleById.fulfilled,
        (
          state,
          action: PayloadAction<Comment[]>
        ) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
        }
      )
      .addCase(
        fetchCommentsArticleById.rejected,
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

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
