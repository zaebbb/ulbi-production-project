import { createSelector } from '@reduxjs/toolkit'
import { UserRole } from '../types/user'
import { type StateSchema } from '@/app/providers/StoreProvider'

export const getUserRoles =
  (state: StateSchema) => state.user.authData?.roles

export const isAdmin = createSelector(
  getUserRoles,
  (roles) => Boolean(roles?.includes(UserRole.ADMIN))
)

export const isManager = createSelector(
  getUserRoles,
  (roles) => Boolean(roles?.includes(UserRole.MANAGER))
)
