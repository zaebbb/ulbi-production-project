import { userEvent } from '@storybook/testing-library'
import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('Компонент <Counter />', () => {
  test(
    'Рендер компонента',
    () => {
      componentRender(<Counter />, {
        initialState: {
          counter: {
            value: 10,
          },
        },
      })
      expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    }
  )

  test(
    'Увеличение счетчика',
    () => {
      componentRender(<Counter />, {
        initialState: {
          counter: {
            value: 5,
          },
        },
      })
      userEvent.click(screen.getByTestId('btn-increment'))
      expect(screen.getByTestId('value-title')).toHaveTextContent('6')
    }
  )

  test(
    'Уменьшение счетчика на 2',
    () => {
      componentRender(<Counter />, {
        initialState: {
          counter: {
            value: 3,
          },
        },
      })
      userEvent.click(screen.getByTestId('btn-decrement'))
      userEvent.click(screen.getByTestId('btn-decrement'))
      expect(screen.getByTestId('value-title')).toHaveTextContent('1')
    }
  )
})
