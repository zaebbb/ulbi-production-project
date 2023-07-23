import type { ComponentStory, Meta } from '@storybook/react'
import { ListBox, type ListBoxItem } from './ListBox'

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
}

const ListBoxTestComponent: ListBoxItem[] = [
  { value: '1', content: '1' },
  { value: '2', content: '2' },
  { value: '3', content: '3' },
  { value: '4', content: '4' },
  { value: '5', content: '5' },
]

export default meta
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Default = Template.bind({})
Default.args = {
  items: ListBoxTestComponent,
}
