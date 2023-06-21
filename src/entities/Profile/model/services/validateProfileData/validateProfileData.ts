import {
  type Profile,
  ValidateProfileError,
} from '../../type/profile'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const {
    country,
    avatar,
    currency,
    city,
    username,
    first,
    age,
    lastname,
  } = profile

  const errors: ValidateProfileError[] = []

  if (!first) errors.push(ValidateProfileError.INCORRECT_FIRSTNAME)
  if (!lastname) errors.push(ValidateProfileError.INCORRECT_LASTNAME)
  if (!username) errors.push(ValidateProfileError.INCORRECT_USERNAME)
  if (!city) errors.push(ValidateProfileError.INCORRECT_CITY)
  if (!avatar) errors.push(ValidateProfileError.INCORRECT_AVATAR)

  if (!age || !Number.isInteger(age)) errors.push(ValidateProfileError.INCORRECT_AGE)

  if (!country) errors.push(ValidateProfileError.INCORRECT_COUNTRY)
  if (!currency) errors.push(ValidateProfileError.INCORRECT_CURRENCY)

  return errors
}
