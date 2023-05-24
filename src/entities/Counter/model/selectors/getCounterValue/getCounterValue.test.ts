import { getCounterValue } from './getCounterValue'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('Тест getCounterValue', () => {
  test(
    'should return counter value',
    () => {
      const state: DeepPartial<StateSchema> = {
        counter: {
          value: 5,
        },
      }

      expect(getCounterValue(state as StateSchema)).toEqual(5)
    }
  )
})
