import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'
import { Button } from '@/shared/ui/Button'

export const Counter: React.FC = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1
        data-testid={'value-title'}
      >
        {counterValue}
      </h1>
      <Button
        onClick={increment}
        data-testid={'btn-increment'}
      >
        {
          // eslint-disable-next-line i18next/no-literal-string
          'increment'
        }
      </Button>
      <Button
        onClick={decrement}
        data-testid={'btn-decrement'}
      >
        {
          // eslint-disable-next-line i18next/no-literal-string
          'decrement'
        }
      </Button>
    </div>
  )
}
