import { ValidateProfileError } from '../../const/consts'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getProfileValidateErrors.test', () => {
  test(
    'should return error',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          validate: [
            ValidateProfileError.NO_DATA,
          ],
        },
      }
      expect(getProfileValidateErrors(state as StateSchema)).toEqual([
        ValidateProfileError.NO_DATA,
      ])
    }
  )

  test(
    'should work with empty state',
    () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    }
  )
})
