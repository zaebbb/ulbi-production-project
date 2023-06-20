import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const SidebarLight: Story = {
  args: {

  },
}
SidebarLight.decorators = [StoreDecorator({})]

export const SidebarDark: Story = {
  args: {

  },
}
SidebarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
