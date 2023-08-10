import { ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentList } from './CommentList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
} satisfies ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> =
  (args) => <CommentList {...args} />

export const Primary = Template.bind({})
Primary.args = {
  comments: [
    { id: '1', text: 'test 1', user: { id: '1', username: 'test 1' } },
    { id: '2', text: 'test 2', user: { id: '2', username: 'test 2' } },
    { id: '3', text: 'test 3', user: { id: '3', username: 'test 3' } },
  ],
}
Primary.decorators = [
  StoreDecorator({}),
]

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true,
}
IsLoading.decorators = [
  StoreDecorator({}),
]
