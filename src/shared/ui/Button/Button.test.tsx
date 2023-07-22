import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

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
      render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
      expect(screen.getByText('Test')).toHaveClass('clear')
      screen.debug()
    })
})
