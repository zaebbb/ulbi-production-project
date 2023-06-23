import { profileActions, profileReducer } from './profileSlice'
import { type ProfileSchema, updateProfileData } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

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

describe('Тест profileSlice.test', () => {
  test(
    'test set readonly',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        readonly: false,
      }

      expect(profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true)
      )).toEqual({ readonly: true })
    }
  )

  test(
    'test cancel edit',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        readonly: false,
        data: {
          lastname: 'hello',
        },
        form: {},
        validate: [],
      }

      expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit()
      )).toEqual({
        readonly: true,
        data: {
          lastname: 'hello',
        },
        form: {
          lastname: 'hello',
        },
        validate: undefined,
      })
    }
  )

  test(
    'test update profile',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        form: {
          lastname: 'hello',
        },
      }

      expect(profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          first: 'world',
        })
      )).toEqual({
        form: {
          lastname: 'hello',
          first: 'world',
        },
      })
    }
  )

  test(
    'test update profile service pending',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        isLoading: false,
        validate: [],
      }

      expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending
      )).toEqual({
        isLoading: true,
        validate: undefined,
      })
    }
  )

  test(
    'test update profile service fulfilled',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        isLoading: true,
        data: {
          first: 'hello',
        },
        form: {
          lastname: 'world',
        },
        readonly: false,
        validate: [],
      }

      expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )).toEqual({
        isLoading: false,
        data,
        form: data,
        readonly: true,
        validate: undefined,
      })
    }
  )
})
