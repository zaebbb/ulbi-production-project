// eslint-disable-next-line dev-proger-plugin/layer-imports
import '@/app/styles/index.scss'
import { type Story } from '@storybook/react'

export const StyleDecorator = (StoryComponent: Story) => (
  <StoryComponent />
)
