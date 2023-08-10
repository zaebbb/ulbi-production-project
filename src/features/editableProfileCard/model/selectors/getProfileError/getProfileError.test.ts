import { getProfileError } from './getProfileError'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getProfileError.test', () => {
  test(
    'should return error',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          error: 'error',
        },
      }
      expect(getProfileError(state as StateSchema)).toEqual('error')
    }
  )

  test(
    'should work with empty state',
    () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getProfileError(state as StateSchema)).toEqual(undefined)
    }
  )
})
