import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { articleDetailsReducer } from './articleDetailsSlice'

describe('Тест articleDetailsSlice.test', () => {
  test(
    'test update profile service pending',
    () => {
      const state: DeepPartial<ArticleDetailsSchema> = {
        isLoading: false,
      }

      expect(
        articleDetailsReducer(
          state as ArticleDetailsSchema,
          fetchArticleById.pending
        )
      ).toEqual({
        isLoading: true,
      })
    }
  )
})
