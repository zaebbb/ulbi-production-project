import { screen } from '@testing-library/react'
import AppRouter from './AppRouter'
import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('Тест AppRouter.test', () => {
  test(
    'Страница должна отрендериться',
    async () => {
      componentRender(<AppRouter />, {
        route: getRouteAbout(),
      })

      const page = await screen.findByTestId('AboutPage')
      expect(page).toBeInTheDocument()
    }
  )

  test(
    'Страница не найдена',
    async () => {
      componentRender(<AppRouter />, {
        route: '/not-page',
      })

      const page = await screen.findByTestId('NotFoundPage')
      expect(page).toBeInTheDocument()
    }
  )

  test(
    'Редирект неавторизованного пользователя на главную',
    async () => {
      componentRender(<AppRouter />, {
        route: getRouteProfile('1'),
      })

      const page = await screen.findByTestId('MainPage')
      expect(page).toBeInTheDocument()
    }
  )

  test(
    'Доступ к закрытой странице для авторизованного пользователя',
    async () => {
      componentRender(<AppRouter />, {
        route: getRouteAdminPanel(),
        initialState: {
          user: {
            authData: {
              id: '1',
              username: 'test-user',
              roles: [UserRole.ADMIN],
            },
          },
        },
      })

      const page = await screen.findByTestId('AdminPage')
      expect(page).toBeInTheDocument()
    }
  )

  test(
    'Доступ к закрытой странице закрыт для авторизованного пользователя без нужной роли',
    async () => {
      componentRender(<AppRouter />, {
        route: getRouteAdminPanel(),
        initialState: {
          user: {
            authData: {
              id: '1',
              username: 'test-user',
            },
          },
        },
      })

      const page = await screen.findByTestId('ForbiddenPage')
      expect(page).toBeInTheDocument()
    }
  )
})
