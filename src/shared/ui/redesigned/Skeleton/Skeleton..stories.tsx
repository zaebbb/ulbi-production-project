import { ComponentMeta } from '@storybook/react'
import type { ComponentStory } from '@storybook/react'
import { Skeleton } from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
} satisfies ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> =
  (args) => <Skeleton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: '100%',
  height: 200,
}

export const Circle = Template.bind({})
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
}

export const Input = Template.bind({})
Input.args = {
  border: '8px',
  width: 400,
  height: 40,
}
