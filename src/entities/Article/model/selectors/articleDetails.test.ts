import { type StateSchema } from 'app/providers/StoreProvider'
import {
  getArticleDetailsIsLoading,
  getArticleDetailsData,
  getArticleDetailsError,
} from './articleDetails'

describe('Тест articleDetails.test', () => {
  test(
    'Тестирование getArticleDetailsIsLoading',
    () => {
      const state: DeepPartial<StateSchema> = {
        articleDetails: {
          isLoading: true,
        },
      }

      expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    }
  )

  test(
    'Тестирование getArticleDetailsIsLoading на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined)
    }
  )

  test(
    'Тестирование getArticleDetailsError',
    () => {
      const state: DeepPartial<StateSchema> = {
        articleDetails: {
          error: 'error',
        },
      }

      expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    }
  )

  test(
    'Тестирование getArticleDetailsError на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    }
  )

  test(
    'Тестирование getArticleDetailsData',
    () => {
      const state: DeepPartial<StateSchema> = {
        articleDetails: {
          data: {
            id: '1',
          },
        },
      }

      expect(getArticleDetailsData(state as StateSchema)).toEqual({ id: '1' })
    }
  )

  test(
    'Тестирование getArticleDetailsData на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    }
  )
})
