import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Loader>

export const Primary: Story = {
  args: {
    children: 'Hello Loader',
  },
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const LoaderLight: Story = {}

export const LoaderDark: Story = {}
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)]
