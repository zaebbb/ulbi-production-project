import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country/model/types/country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'

const reducers: ReducerList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validate = useSelector(getProfileValidateErrors)
  const { t } = useTranslation('errors')
  const { id } = useParams<{ id: string }>()

  const validateErrorTranslates = {
    [ValidateProfileError.INTERNAL_SERVER_ERROR]: t('INTERNAL_SERVER_ERROR'),
    [ValidateProfileError.INCORRECT_FIRSTNAME]: t('INCORRECT_FIRSTNAME'),
    [ValidateProfileError.INCORRECT_AGE]: t('INCORRECT_AGE'),
    [ValidateProfileError.INCORRECT_AVATAR]: t('INCORRECT_AVATAR'),
    [ValidateProfileError.INCORRECT_CITY]: t('INCORRECT_CITY'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('INCORRECT_COUNTRY'),
    [ValidateProfileError.INCORRECT_CURRENCY]: t('INCORRECT_CURRENCY'),
    [ValidateProfileError.INCORRECT_LASTNAME]: t('INCORRECT_LASTNAME'),
    [ValidateProfileError.INCORRECT_USERNAME]: t('INCORRECT_USERNAME'),
    [ValidateProfileError.NO_DATA]: t('NO_DATA'),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      first: value || '',
    }))
  }, [dispatch])

  const onChangeLastname = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value || '',
    }))
  }, [dispatch])

  const onChangeAge = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      age: Number(value || 0),
    }))
  }, [dispatch])

  const onChangeCity = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      city: value || '',
    }))
  }, [dispatch])

  const onChangeUsername = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      username: value || '',
    }))
  }, [dispatch])

  const onChangeAvatar = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      avatar: value || '',
    }))
  }, [dispatch])

  const onChangeCurrency = React.useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({
      currency: value || Currency.RUB,
    }))
  }, [dispatch])

  const onChangeCountry = React.useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({
      country: value || Country.Russia,
    }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfilePageHeader />

        {validate?.length && validate.map(err => (
          <Text
            key={err}
            text={validateErrorTranslates[err]}
            theme={TextTheme.ERROR}
          />
        ))}

        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
