import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof NotFoundPage>

export const NotFoundPageLight: Story = {}
NotFoundPageLight.decorators = [
  StoreDecorator({}),
]

export const NotFoundPageDark: Story = {}
NotFoundPageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
