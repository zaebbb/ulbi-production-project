import { type FeatureFlags } from '@/shared/types/featuresFlags'

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER'
}

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
  features?: FeatureFlags
}

export interface UserSchema {
  authData?: User
  _mounted?: boolean
}
