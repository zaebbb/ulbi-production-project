import type { ComponentStory, Meta } from '@storybook/react'
import { Select, type SelectOption } from './Select'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
}

const options: Array<SelectOption<string>> = [
  { value: '123', content: '123' },
  { value: '1234', content: '1234' },
  { value: '1235', content: '1235' },
  { value: '1236', content: '1236' },
  { value: '1237', content: '1237' },
  { value: '1238', content: '1238' },
]

export default meta
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Выберите значение',
  options,
}
export const NoLabel = Template.bind({})
NoLabel.args = {
  options,
}
