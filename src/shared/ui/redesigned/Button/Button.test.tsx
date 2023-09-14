import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('UI компонент <Button>', () => {
  test(
    'Рендер компонента',
    () => {
      render(<Button>Test</Button>)
      expect(screen.getByText('Test')).toBeInTheDocument()
    })

  test(
    'Рендер компонента с темой CLEAR',
    () => {
      render(<Button variant={'clear'}>Test</Button>)
      expect(screen.getByText('Test')).toHaveClass('clear')
      screen.debug()
    })
})
