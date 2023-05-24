import { counterActions, counterReducer } from './counterSlice'
import { type CounterSchema } from './../types/counterSchema'

describe('Тест counterSlice', () => {
  test(
    'test action increment',
    () => {
      const state: CounterSchema = {
        value: 5,
      }

      expect(
        counterReducer(
          state,
          counterActions.increment()
        )
      ).toEqual({ value: 6 })
    }
  )

  test(
    'test action decrement',
    () => {
      const state: CounterSchema = {
        value: 5,
      }

      expect(
        counterReducer(
          state,
          counterActions.decrement()
        )
      ).toEqual({ value: 4 })
    }
  )

  test(
    'test should work with empty state',
    () => {
      expect(
        counterReducer(
          undefined,
          counterActions.decrement()
        )
      ).toEqual({ value: -1 })
    }
  )
})
