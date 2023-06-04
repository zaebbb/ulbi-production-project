import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsync/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('Тест loginByUsername.test', () => {
  test(
    'Тестирование POST запроса на выполнение',
    async () => {
      const userValue = { username: '123', id: '1' }
      mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

      const thunk = new TestAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({
        username: 'admin',
        password: '123',
      })

      expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(mockedAxios.post).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(userValue)
    }
  )

  test(
    'Тестирование POST запроса на ошибку 403',
    async () => {
      mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

      const thunk = new TestAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({
        username: 'admin',
        password: '123',
      })

      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(mockedAxios.post).toHaveBeenCalled()
      expect(result.payload).toBe('error')
    }
  )
})
