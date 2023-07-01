import { type ArticleDetailsSchema } from 'entities/Article'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'

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
