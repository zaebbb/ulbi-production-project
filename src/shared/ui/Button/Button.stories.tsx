import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Hello Button',
  },
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear: Story = {
  args: {
    children: 'Clear Button',
    theme: ThemeButton.CLEAR,
  },
}
Clear.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineLight: Story = {
  args: {
    children: 'Outline Button',
    theme: ThemeButton.OUTLINE,
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'Outline Button',
    theme: ThemeButton.OUTLINE,
  },
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
