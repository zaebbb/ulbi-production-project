import type { ComponentStory, Meta } from '@storybook/react'
import { Avatar, AvatarSize } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
}

const src: string = 'https://avatarko.ru/img/kartinka/14/Iron_man_13295.jpg'

export default meta
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  src,
}
export const Small = Template.bind({})
Small.args = {
  src,
  sizeType: AvatarSize.SMALL,
}
export const Medium = Template.bind({})
Medium.args = {
  src,
  sizeType: AvatarSize.MEDIUM,
}
export const Large = Template.bind({})
Large.args = {
  src,
  sizeType: AvatarSize.LARGE,
}
export const CustomSize30 = Template.bind({})
CustomSize30.args = { src, size: 30 }
export const CustomSize120 = Template.bind({})
CustomSize120.args = { src, size: 120 }
export const CustomSize230 = Template.bind({})
CustomSize230.args = { src, size: 230 }
export const CustomSize500 = Template.bind({})
CustomSize500.args = { src, size: 500 }
export const CustomSizeAndSizeType = Template.bind({})
CustomSizeAndSizeType.args = {
  src,
  size: 500,
  sizeType: AvatarSize.SMALL,
}
