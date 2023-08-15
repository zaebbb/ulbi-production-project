import { type Currency } from '@/entities/Currency'
import { type Country } from '@/entities/Country'

export interface Profile {
  id?: string
  first?: string
  lastname?: string
  age?: number
  city?: string
  currency?: Currency
  country?: Country
  username?: string
  avatar?: string
}
