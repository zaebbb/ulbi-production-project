import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof Navbar>

export const NavbarLight: Story = {}
NavbarLight.decorators = [StoreDecorator({})]

export const NavbarDark: Story = {}
NavbarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]

export const AuthNavbar: Story = {}
AuthNavbar.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
]
