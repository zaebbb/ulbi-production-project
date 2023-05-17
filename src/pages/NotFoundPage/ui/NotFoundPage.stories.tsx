import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs'],
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof NotFoundPage>

export const NotFoundPageLight: Story = {}

export const NotFoundPageDark: Story = {}
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)]
