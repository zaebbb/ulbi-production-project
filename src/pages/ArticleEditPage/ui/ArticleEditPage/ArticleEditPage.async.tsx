import React from 'react'

export const ArticleEditPageAsync =
  React.lazy(async () => await import('./ArticleEditPage'))
