import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsync/TestAsyncThunk'

describe('Тест loginByUsername.test', () => {
  test(
    'Тестирование POST запроса на выполнение',
    async () => {
      const userValue = { username: '123', id: '1' }

      const thunk = new TestAsyncThunk(loginByUsername)
      thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

      const result = await thunk.callThunk({
        username: 'admin',
        password: '123',
      })

      expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(thunk.api.post).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(userValue)
    }
  )

  test(
    'Тестирование POST запроса на ошибку 403',
    async () => {
      const thunk = new TestAsyncThunk(loginByUsername)
      thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

      const result = await thunk.callThunk({
        username: 'admin',
        password: '123',
      })

      expect(thunk.dispatch).toHaveBeenCalledTimes(2)
      expect(thunk.api.post).toHaveBeenCalled()
      expect(result.payload).toBe('error')
    }
  )
})
