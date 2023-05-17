import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
}

export default meta
type Story = StoryObj<typeof AppLink>

export const AppLinkPrimaryLight: Story = {
  args: {
    children: 'AppLinkPrimaryLight',
    theme: AppLinkTheme.PRIMARY,
  },
}

export const AppLinkSecondaryLight: Story = {
  args: {
    children: 'AppLinkSecondaryLight',
    theme: AppLinkTheme.SECONDARY,
  },
}

export const AppLinkPrimaryDark: Story = {
  args: {
    children: 'AppLinkPrimaryDark',
    theme: AppLinkTheme.PRIMARY,
  },
}
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const AppLinkSecondaryDark: Story = {
  args: {
    children: 'AppLinkSecondaryDark',
    theme: AppLinkTheme.SECONDARY,
  },
}
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
