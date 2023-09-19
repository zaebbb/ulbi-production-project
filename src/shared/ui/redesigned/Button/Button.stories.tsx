import type { ComponentStory, Meta } from '@storybook/react'
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Button } from './Button'
import { Theme } from '@/shared/const'

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
  variant: 'clear',
}
Clear.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Clear Button',
  variant: 'clear',
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  children: 'Outline Button',
  variant: 'outline',
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Outline Button',
  variant: 'outline',
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

// export const BackgroundTheme = Template.bind({})
// BackgroundTheme.args = {
//   children: 'Button',
//   theme: ThemeButton.BACKGROUND,
// }
//
// export const BackgroundInvertedTheme = Template.bind({})
// BackgroundInvertedTheme.args = {
//   children: 'Button',
//   theme: ThemeButton.BACKGROUND_INVERTED,
// }
//
// export const Square = Template.bind({})
// Square.args = {
//   children: '>',
//   theme: ThemeButton.BACKGROUND_INVERTED,
//   square: true,
// }
//
// export const SquareM = Template.bind({})
// SquareM.args = {
//   children: '>',
//   theme: ThemeButton.BACKGROUND_INVERTED,
//   square: true,
//   size: SizeButton.M,
// }
//
// export const SquareL = Template.bind({})
// SquareL.args = {
//   children: '>',
//   theme: ThemeButton.BACKGROUND_INVERTED,
//   square: true,
//   size: SizeButton.L,
// }
//
// export const SquareXL = Template.bind({})
// SquareXL.args = {
//   children: '>',
//   theme: ThemeButton.BACKGROUND_INVERTED,
//   square: true,
//   size: SizeButton.XL,
// }
//
// export const ButtonSizeM = Template.bind({})
// ButtonSizeM.args = {
//   children: 'Text',
//   theme: ThemeButton.BACKGROUND_INVERTED,
//   size: SizeButton.M,
// }
//
// export const ButtonSizeL = Template.bind({})
// ButtonSizeL.args = {
//   children: 'Text',
//   theme: ThemeButton.BACKGROUND_INVERTED,
//   size: SizeButton.L,
// }
//
// export const ButtonSizeXL = Template.bind({})
// ButtonSizeXL.args = {
//   children: 'Text',
//   theme: ThemeButton.BACKGROUND_INVERTED,
//   size: SizeButton.XL,
// }
//
// export const ButtonDisabled = Template.bind({})
// ButtonDisabled.args = {
//   children: 'Text',
//   theme: ThemeButton.BACKGROUND_INVERTED,
//   size: SizeButton.L,
//   disabled: true,
// }