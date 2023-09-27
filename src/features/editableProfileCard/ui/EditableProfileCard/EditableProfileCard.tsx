import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ValidateProfileError } from '../../model/const/consts'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import {
  getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {
  getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import cls from './EditableProfileCard.module.scss'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileCard } from '@/entities/Profile'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'

interface EditableProfileCardProps {
  className?: string
  id: string
}

const reducers: ReducerList = {
  profile: profileReducer,
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const {
    className,
    id,
  } = props
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validate = useSelector(getProfileValidateErrors)
  const { t } = useTranslation('errors')

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
    <DynamicModuleLoader
      reducers={reducers}
    >
      <EditableProfileCardHeader />

      <div
        className={classNames(cls.EditableProfileCard, {}, [className])}
        data-testid={'editable-profile-card'}
      >
        {validate?.length && validate.map(err => (
          <ToggleFeatures
            key={err}
            feature={'isAppRedesigned'}
            off={
              <TextDeprecated
                key={err}
                text={validateErrorTranslates[err]}
                theme={TextTheme.ERROR}
                data-testid={'editable-profile-card-error'}
              />
            }
            on={
              <Text
                key={err}
                text={validateErrorTranslates[err]}
                variant={'error'}
                data-testid={'editable-profile-card-error'}
              />
            }
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
})
