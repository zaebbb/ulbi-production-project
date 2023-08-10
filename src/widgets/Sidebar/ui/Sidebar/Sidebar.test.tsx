import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
describe('UI компонент <Sidebar />', () => {
  test(
    'Рендер компонента',
    () => {
      componentRender(<Sidebar />)
      expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

  test(
    'Тест на сворачивание сайдбара',
    () => {
      componentRender(<Sidebar />)
      const toggleBtn = screen.getByTestId('sidebar-toggle')
      expect(screen.getByTestId('sidebar')).toBeInTheDocument()
      fireEvent.click(toggleBtn)
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
