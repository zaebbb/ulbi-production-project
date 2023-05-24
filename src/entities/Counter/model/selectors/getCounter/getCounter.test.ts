import { getCounter } from './getCounter'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('Тест getCounterValue', () => {
  test(
    'should return counter value',
    () => {
      const state: DeepPartial<StateSchema> = {
        counter: {
          value: 10,
        },
      }
      expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    }
  )
})
