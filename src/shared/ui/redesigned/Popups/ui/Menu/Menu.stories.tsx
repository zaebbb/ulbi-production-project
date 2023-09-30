import type { ComponentStory, Meta } from '@storybook/react'
import { Menu, type MenuItem } from './Menu'

const meta: Meta<typeof Menu> = {
  title: 'shared/redesigned/popups/Menu',
  component: Menu,
}

const MenuTestComponent: MenuItem[] = [
  { content: '1' },
  { content: '2' },
  { content: '3' },
  { content: '4' },
  { content: '5', disabled: true },
]

export default meta
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
  items: MenuTestComponent,
  trigger: 'кнопочка',
}
