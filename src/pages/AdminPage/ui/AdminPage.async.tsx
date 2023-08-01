import React from 'react'

export const AdminPageAsync =
  React.lazy(async () => await import('./AdminPage'))
