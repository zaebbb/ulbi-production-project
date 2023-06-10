import { type ReactNode } from 'react'
import { render, type RenderResult } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import i18ForTests from 'shared/config/i18n/i18ForTests'
import { I18nextProvider } from 'react-i18next'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender (
  component: ReactNode,
  options: componentRenderOptions = {}
): RenderResult {
  const {
    route = '/',
    initialState,
  } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18ForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
