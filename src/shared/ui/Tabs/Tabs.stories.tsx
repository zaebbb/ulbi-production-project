import type { ComponentStory, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
}

export default meta
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = {
  tabs: [
    { value: 'test 1', content: 'test 1' },
    { value: 'test 2', content: 'test 2' },
    { value: 'test 3', content: 'test 3' },
  ],
  value: 'test 2',
  onTabClick: action('onTabClick'),
}
