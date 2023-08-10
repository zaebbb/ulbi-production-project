import { ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
} satisfies ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> =
  (args) => <CommentCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  comment: { id: '1', text: 'hello world', user: { id: '1', username: 'test user' } },
}
Primary.decorators = [
  StoreDecorator({}),
]

export const isLoading = Template.bind({})
isLoading.args = {
  comment: { id: '1', text: 'hello world', user: { id: '1', username: 'test user' } },
  isLoading: true,
}
isLoading.decorators = [
  StoreDecorator({}),
]
