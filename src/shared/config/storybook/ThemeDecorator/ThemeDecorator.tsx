import { type Story } from '@storybook/react'
// eslint-disable-next-line dev-proger-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { type Theme } from '@/shared/const'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  )
}
