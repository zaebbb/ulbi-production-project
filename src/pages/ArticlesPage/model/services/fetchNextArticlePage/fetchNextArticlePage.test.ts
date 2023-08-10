import { fetchArticles } from '../fetchArticles/fetchArticles'
import { FetchNextArticlePage } from './fetchNextArticlePage'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsync/TestAsyncThunk'

jest.mock('../fetchArticles/fetchArticles')

describe('Тест FetchNextArticlePage.test', () => {
  test(
    'Тестирование запроса на выполнение',
    async () => {
      const thunk = new TestAsyncThunk(FetchNextArticlePage, {
        articlesPage: {
          page: 2,
          ids: [],
          entities: {},
          limit: 5,
          isLoading: false,
          hasMore: true,
        },
      })

      await thunk.callThunk()

      expect(thunk.dispatch).toBeCalledTimes(4)
      expect(thunk.getState).toBeCalledTimes(3)
      expect(fetchArticles).toBeCalledWith({})
    }
  )

  test(
    'Тестирование запроса на неподходящие данные для выполнения',
    async () => {
      const thunk = new TestAsyncThunk(FetchNextArticlePage, {
        articlesPage: {
          page: 2,
          ids: [],
          entities: {},
          limit: 5,
          isLoading: false,
          hasMore: false,
        },
      })

      await thunk.callThunk()

      expect(fetchArticles).not.toHaveBeenCalled()
    }
  )

  test(
    'Тестирование запроса на неподходящие данные для выполнения 2',
    async () => {
      const thunk = new TestAsyncThunk(FetchNextArticlePage, {
        articlesPage: {
          page: 2,
          ids: [],
          entities: {},
          limit: 5,
          isLoading: true,
          hasMore: false,
        },
      })

      await thunk.callThunk()

      expect(fetchArticles).not.toHaveBeenCalled()
    }
  )
})
