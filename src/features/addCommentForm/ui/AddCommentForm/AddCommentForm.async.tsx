import React from 'react'

export const AddCommentFormAsync =
  React.lazy(async () => await import('./AddCommentForm'))
