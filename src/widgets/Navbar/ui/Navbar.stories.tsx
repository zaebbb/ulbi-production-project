import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof Navbar>

export const NavbarLight: Story = {}

export const NavbarDark: Story = {}
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)]
