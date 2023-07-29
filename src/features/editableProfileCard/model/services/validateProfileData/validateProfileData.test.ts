import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'
import { validateProfileData } from './validateProfileData'

const data = {
  first: '123',
  lastname: 'Mihailov',
  age: 2021,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Ekb',
  username: 'admin',
  avatar: 'https://avatarko.ru/img/kartinka/14/Iron_man_13295.jpg',
}

describe('Тест validateProfileData.test', () => {
  test(
    'Успешная валидация',
    () => {
      const result = validateProfileData(data)

      expect(result).toEqual([])
    }
  )

  test(
    'Ошибка LastName и firstname',
    async () => {
      const result = validateProfileData({
        ...data,
        first: '',
        lastname: '',
      })

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_FIRSTNAME,
        ValidateProfileError.INCORRECT_LASTNAME,
      ])
    }
  )

  test(
    'Ошибка Age',
    async () => {
      const result = validateProfileData({
        ...data,
        age: NaN,
      })

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_AGE,
      ])
    }
  )

  test(
    'Ошибка Currency',
    async () => {
      const result = validateProfileData({
        ...data,
        currency: undefined,
      })

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_CURRENCY,
      ])
    }
  )

  test(
    'Ошибки',
    async () => {
      const result = validateProfileData({})

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_FIRSTNAME,
        ValidateProfileError.INCORRECT_LASTNAME,
        ValidateProfileError.INCORRECT_USERNAME,
        ValidateProfileError.INCORRECT_CITY,
        ValidateProfileError.INCORRECT_AVATAR,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
        ValidateProfileError.INCORRECT_CURRENCY,
      ])
    }
  )

  test(
    'Нет данных',
    async () => {
      const result = validateProfileData()

      expect(result).toEqual([
        ValidateProfileError.NO_DATA,
      ])
    }
  )
})
