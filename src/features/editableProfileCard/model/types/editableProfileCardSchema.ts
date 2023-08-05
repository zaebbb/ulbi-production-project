import { type Profile } from 'entities/Profile/model/type/profile'
import { type ValidateProfileError } from '../const/consts'

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validate?: ValidateProfileError[]
}
