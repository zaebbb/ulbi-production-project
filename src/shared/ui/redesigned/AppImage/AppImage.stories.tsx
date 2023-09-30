import type { Meta, StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'

const meta: Meta<typeof AppImage> = {
  title: 'shared/redesigned/AppImage',
  component: AppImage,
}

export default meta
type Story = StoryObj<typeof AppImage>

export const Primary: Story = {}
