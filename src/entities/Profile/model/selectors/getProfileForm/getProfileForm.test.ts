import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'

describe('Тест getProfileForm.test', () => {
  test(
    'should return error',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          form: {
            age: 10,
          },
        },
      }
      expect(getProfileForm(state as StateSchema)).toEqual({ age: 10 })
    }
  )

  test(
    'should work with empty state',
    () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    }
  )
})
