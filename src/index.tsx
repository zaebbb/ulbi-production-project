import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/shared/config/i18n/i18n'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import './app/styles/index.scss'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { App } from '@/app/App'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Error starting app')
}

const root = createRoot(container)
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
