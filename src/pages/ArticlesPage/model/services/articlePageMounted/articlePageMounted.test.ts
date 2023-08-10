import { fetchArticles } from '../fetchArticles/fetchArticles'
import { ArticlePageMounted } from './articlePageMounted'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsync/TestAsyncThunk'

jest.mock('../fetchArticles/fetchArticles')

describe('Тест articlePageMounted.test', () => {
  test(
    'Тестирование запроса на выполнение',
    async () => {
      const thunk = new TestAsyncThunk(ArticlePageMounted, {
        articlesPage: {
          _mounted: false,
          page: 1,
        },
      })

      await thunk.callThunk({})

      expect(thunk.dispatch).toBeCalledTimes(4)
      expect(thunk.getState).toBeCalledTimes(1)
      expect(fetchArticles).toBeCalledWith({})
    }
  )

  test(
    'Тестирование запроса на mounted = true',
    async () => {
      const thunk = new TestAsyncThunk(ArticlePageMounted, {
        articlesPage: {
          _mounted: true,
          page: 1,
        },
      })

      await thunk.callThunk({})

      expect(thunk.dispatch).toBeCalledTimes(2)
      expect(thunk.getState).toBeCalledTimes(1)
      expect(fetchArticles).not.toHaveBeenCalled()
    }
  )
})
