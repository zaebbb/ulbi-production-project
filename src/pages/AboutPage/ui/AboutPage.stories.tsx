import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof AboutPage>

export const AboutPageLight: Story = {}
AboutPageLight.decorators = [
  StoreDecorator({}),
]

export const AboutPageDark: Story = {}
AboutPageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
