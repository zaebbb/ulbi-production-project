import React from 'react'
import { type LoginFormProps } from './LoginForm'

export const LoginFormAsync =
  React.lazy<React.FC<LoginFormProps>>(
    async () => await import('./LoginForm')
  )
