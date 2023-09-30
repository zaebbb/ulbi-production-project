import type { ComponentStory, Meta } from '@storybook/react'
import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'shared/redesigned/popups/Popover',
  component: Popover,
}

export default meta
const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <div>
      <h1>Test</h1>
      <p>text</p>
    </div>
  ),
  trigger: 'кнопочка',
}
