import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsync/TestAsyncThunk'

const data = {
  first: '',
  lastname: 'Mihailov',
  age: 2021,
  currency: 'RUB',
  country: 'Belarus',
  city: 'Ekb',
  username: 'admin',
  avatar: 'https://avatarko.ru/img/kartinka/14/Iron_man_13295.jpg',
}

describe('Тест fetchProfileData.test', () => {
  test(
    'Тестирование GET запроса на выполнение',
    async () => {
      const thunk = new TestAsyncThunk(fetchProfileData)
      thunk.api.get.mockReturnValue(Promise.resolve({ data }))

      const result = await thunk.callThunk('1')

      expect(thunk.api.get).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(data)
    }
  )

  test(
    'Тестирование GET запроса на ошибку 403',
    async () => {
      const thunk = new TestAsyncThunk(fetchProfileData)
      thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

      const result = await thunk.callThunk('2')

      expect(result.meta.requestStatus).toBe('rejected')
    }
  )
})
