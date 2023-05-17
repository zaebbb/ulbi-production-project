import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof MainPage>

export const MainPageLight: Story = {}

export const MainPageDark: Story = {}
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)]
