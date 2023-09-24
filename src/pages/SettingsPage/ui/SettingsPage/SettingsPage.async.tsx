import React from 'react'

export const SettingsPageAsync =
  React.lazy(async () => await import('./SettingsPage'))
