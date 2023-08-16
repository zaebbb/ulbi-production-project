import { addDecorator } from '@storybook/react'
import {
  StyleDecorator,
} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {
  ThemeDecorator,
} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {
  BrowserRouterDecorator,
} from '../../src/shared/config/storybook/BrowserRouterDecorator/BrowserRouterDecorator'
import {
  SuspenseDecorator,
} from '../../src/shared/config/storybook/SuspenceDecorator/SuspenceDecorator'
import {Theme} from "@/shared/const";

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

addDecorator(BrowserRouterDecorator)
addDecorator(StyleDecorator)
addDecorator(SuspenseDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))

export default preview
