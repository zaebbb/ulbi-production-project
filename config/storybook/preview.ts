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
import {
  StoreDecorator,
} from "../../src/shared/config/storybook/StoreDecorator/StoreDecorator";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#a4ccdc' },
      { name: 'dark', class: Theme.DARK, color: '#21314b' },
      { name: 'blue', class: Theme.BLUE, color: '#517efd' }
    ],
  },
}

addDecorator(BrowserRouterDecorator)
addDecorator(StyleDecorator)
addDecorator(SuspenseDecorator)
addDecorator(StoreDecorator({}))
addDecorator(ThemeDecorator(Theme.LIGHT))

