import { type ReactNode } from 'react'
import { render, type RenderResult } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18ForTests from '@/shared/config/i18n/i18ForTests'

export function renderWithTranslations (component: ReactNode): RenderResult {
  return render(
    <I18nextProvider i18n={i18ForTests}>
      {component}
    </I18nextProvider>
  )
}
