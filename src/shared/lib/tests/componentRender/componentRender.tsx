import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render, type RenderResult } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// eslint-disable-next-line dev-proger-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import i18ForTests from '@/shared/config/i18n/i18ForTests'
import { Theme } from '@/shared/const'
// eslint-disable-next-line dev-proger-plugin/layer-imports
import '@/app/styles/index.scss'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface TestProviderProps {
  children: ReactNode
  options?: componentRenderOptions
}

export const TestProvider = (props: TestProviderProps) => {
  const {
    children,
    options = {},
  } = props

  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.BLUE,
  } = options

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18ForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptions = {}
): RenderResult => render(
  <TestProvider options={options}>
    {component}
  </TestProvider>
)
