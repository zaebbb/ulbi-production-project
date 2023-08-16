import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const'

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof PageError>

export const PageErrorLight: Story = {}

export const PageErrorDark: Story = {}
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
