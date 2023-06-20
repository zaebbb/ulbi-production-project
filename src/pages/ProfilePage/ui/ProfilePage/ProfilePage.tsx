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
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country/model/types/country'

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

  React.useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

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
