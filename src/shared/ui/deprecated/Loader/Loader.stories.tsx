import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Loader } from './Loader'
import { Theme } from '@/shared/const'

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
}

export default meta
type Story = StoryObj<typeof Loader>

export const Primary: Story = {}
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const LoaderLight: Story = {}

export const LoaderDark: Story = {}
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)]
