import type { ComponentStory, Meta } from '@storybook/react'
import { Button, SizeButton, ThemeButton } from './Button'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Hello Button',
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear Button',
  theme: ThemeButton.CLEAR,
}
Clear.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Clear Button',
  theme: ThemeButton.CLEAR_INVERTED,
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  children: 'Outline Button',
  theme: ThemeButton.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Outline Button',
  theme: ThemeButton.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Button',
  theme: ThemeButton.BACKGROUND,
}

export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
  children: 'Button',
  theme: ThemeButton.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
}

export const SquareM = Template.bind({})
SquareM.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.M,
}

export const SquareL = Template.bind({})
SquareL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.L,
}

export const SquareXL = Template.bind({})
SquareXL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.XL,
}

export const ButtonSizeM = Template.bind({})
ButtonSizeM.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
  size: SizeButton.M,
}

export const ButtonSizeL = Template.bind({})
ButtonSizeL.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
  size: SizeButton.L,
}

export const ButtonSizeXL = Template.bind({})
ButtonSizeXL.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
  size: SizeButton.XL,
}
