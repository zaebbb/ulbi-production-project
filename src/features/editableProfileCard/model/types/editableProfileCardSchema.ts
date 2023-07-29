import { type Profile } from 'entities/Profile/model/type/profile'

export enum ValidateProfileError {
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
  INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
  INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
  INCORRECT_CITY = 'INCORRECT_CITY',
  INCORRECT_AVATAR = 'INCORRECT_AVATAR',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  NO_DATA = 'NO_DATA'
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validate?: ValidateProfileError[]
}
