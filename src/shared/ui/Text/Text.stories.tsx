import type { ComponentStory, Meta } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'
import { Theme } from '@/shared/const'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const TitleAndText = Template.bind({})
TitleAndText.args = {
  title: 'Title',
  text: 'Description',
}

export const Title = Template.bind({})
Title.args = {
  title: 'Title',
}

export const TextEx = Template.bind({})
TextEx.args = {
  text: 'Description',
}

export const TitleAndTextDark = Template.bind({})
TitleAndTextDark.args = {
  title: 'Title',
  text: 'Description',
}
TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TitleDark = Template.bind({})
TitleDark.args = {
  title: 'Title',
}
TitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextDark = Template.bind({})
TextDark.args = {
  text: 'Description',
}
TextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextError = Template.bind({})
TextError.args = {
  title: 'Title',
  text: 'Description',
  theme: TextTheme.ERROR,
}

export const TextErrorDark = Template.bind({})
TextErrorDark.args = {
  title: 'Title',
  text: 'Description',
  theme: TextTheme.ERROR,
}
TextErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TitleAndTextSizeM = Template.bind({})
TitleAndTextSizeM.args = {
  title: 'Title',
  text: 'Description',
  size: TextSize.M,
}

export const TitleAndTextSizeL = Template.bind({})
TitleAndTextSizeL.args = {
  title: 'Title',
  text: 'Description',
  size: TextSize.L,
}

export const TitleAndTextSizeS = Template.bind({})
TitleAndTextSizeS.args = {
  title: 'Title',
  text: 'Description',
  size: TextSize.S,
}
