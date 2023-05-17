import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const BrowserRouterDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
