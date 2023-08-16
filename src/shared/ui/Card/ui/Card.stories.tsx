import type { ComponentStory, Meta } from '@storybook/react'
import { Card } from './Card'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const'

const meta: Meta<typeof Card> = {
  title: 'widgets/Card',
  component: Card,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: '<h1>Hello Card</h1>',
}

export const DARK = Template.bind({})
DARK.args = {
  children: '<h1>Hello Card</h1>',
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]
