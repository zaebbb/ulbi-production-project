import { ComponentMeta } from '@storybook/react'
import type { ComponentStory } from '@storybook/react'
import { StarRating } from './StarRating'

export default {
  title: 'shared/StarRating',
  component: StarRating,
} satisfies ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> =
  (args) => <StarRating {...args} />

export const Primary = Template.bind({})

export const PrimarySelected1 = Template.bind({})
PrimarySelected1.args = {
  selectedStars: 1,
}

export const PrimarySelected3 = Template.bind({})
PrimarySelected3.args = {
  selectedStars: 3,
}
export const PrimarySelected5 = Template.bind({})
PrimarySelected5.args = {
  selectedStars: 5,
}

export const Size50 = Template.bind({})
Size50.args = {
  size: 50,
}
