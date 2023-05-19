import type { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof LangSwitcher> = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LangSwitcher>

export const LangSwitcherLight: Story = {}

export const LangSwitcherDark: Story = {}
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]