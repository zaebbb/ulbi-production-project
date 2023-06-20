import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country/model/types/country'

export interface Profile {
  first?: string
  lastname?: string
  age?: number
  city?: string
  currency?: Currency
  country?: Country
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
