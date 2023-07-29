import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const SidebarLight: Story = {}
SidebarLight.decorators = [StoreDecorator({
  user: {
    authData: {},
  },
})]

export const SidebarDark: Story = {}
SidebarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
]

export const NoAuth: Story = {
  args: {

  },
}
NoAuth.decorators = [StoreDecorator({})]
