import { getProfileData } from './getProfileData'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getProfileData.test', () => {
  test(
    'should return error',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          data: {
            age: 10,
          },
        },
      }
      expect(getProfileData(state as StateSchema)).toEqual({ age: 10 })
    }
  )

  test(
    'should work with empty state',
    () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getProfileData(state as StateSchema)).toEqual(undefined)
    }
  )
})
