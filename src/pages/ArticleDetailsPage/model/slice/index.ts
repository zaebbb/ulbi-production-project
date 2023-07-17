import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsCommentsReducer } from './articleDetailsComments'
import {
  articleDetailsRecommendationsReducer,
} from './articleDetailsRecommendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer,
})
