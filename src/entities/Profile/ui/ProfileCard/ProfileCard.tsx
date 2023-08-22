import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/type/profile'
import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextTheme } from '@/shared/ui/Text'
import { Input } from '@/shared/ui/Input'
import { Loader } from '@/shared/ui/Loader'
import { Avatar } from '@/shared/ui/Avatar'
import { type Currency, CurrencySelect } from '@/entities/Currency'
import { type Country, CountrySelect } from '@/entities/Country'
import { HStack } from '@/shared/ui/Stack'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency?: Currency) => void
  onChangeCountry?: (country?: Country) => void
}

export const ProfileCard: React.FC<ProfileCardProps> = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading = false,
    error = '',
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    readonly = false,
  } = props
  const { t } = useTranslation('profile')

  const mods = {
    [cls.editing]: !readonly,
  }

  if (isLoading) {
    return (
      <HStack
        align={'center'}
        justify={'center'}
        className={classNames(cls.ProfileCard, mods, [className, cls.loading])}>
        <Loader />
      </HStack>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('error-load-data')}
          text={t('please-reload-page')}
          data-testid={'profile-card-error'}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && <Avatar src={data?.avatar} />}

      <Input
        value={data?.first}
        placeholder={t('profile-input-firstname')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid={'profile-card-firstname'}
      />
      <Input
        value={data?.lastname}
        placeholder={t('profile-input-lastname')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid={'profile-card-lastname'}
      />
      <Input
        value={data?.age}
        placeholder={t('profile-input-age')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
        type={'number'}
        data-testid={'profile-card-age'}
      />
      <Input
        value={data?.city}
        placeholder={t('profile-input-city')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid={'profile-card-city'}
      />
      <Input
        value={data?.username}
        placeholder={t('profile-input-username')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
        data-testid={'profile-card-username'}
      />
      <Input
        value={data?.avatar}
        placeholder={t('profile-input-avatar')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
        data-testid={'profile-card-avatar'}
      />
      <CurrencySelect
        className={classNames(cls.input, {}, [cls.select])}
        value={data?.currency}
        onChange={onChangeCurrency}
        label={t('profile-input-currency')}
        readonly={readonly}
        data-testid={'profile-card-currency'}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        label={t('profile-input-country')}
        readonly={readonly}
        data-testid={'profile-card-country'}
      />
    </div>
  )
})
