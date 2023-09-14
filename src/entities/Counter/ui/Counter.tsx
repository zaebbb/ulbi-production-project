import React from 'react'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'
import { Button } from '@/shared/ui/deprecated/Button'

export const Counter: React.FC = () => {
  const counterValue = useCounterValue()
  const {
    increment,
    decrement,
  } = useCounterActions()

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
