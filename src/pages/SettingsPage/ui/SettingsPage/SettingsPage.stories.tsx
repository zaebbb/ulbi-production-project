import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import React from 'react'
import SettingsPage from './SettingsPage'

export default {
  title: 'pages/SettingsPage',
  component: SettingsPage,
} satisfies ComponentMeta<typeof SettingsPage>

const Template: ComponentStory<typeof SettingsPage> = (args) => <SettingsPage {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
