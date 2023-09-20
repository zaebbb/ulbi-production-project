import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/type/profile'
import cls from './ProfileCard.module.scss'
import { ProfileCardSkeleton } from './ProfileCard.skeleton'
import { type Country, CountrySelect } from '@/entities/Country'
import { type Currency, CurrencySelect } from '@/entities/Currency'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Avatar as AvatarDeprecated } from '@/shared/ui/Avatar'
import { Loader } from '@/shared/ui/Loader'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { VStack as VStackDeprecated } from '@/shared/ui/deprecated/Stack'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack, HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

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
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <HStack
            align={'center'}
            justify={'center'}
            className={classNames(cls.ProfileCard, mods, [className, cls.loading])}>
            <Loader />
          </HStack>
        }
        on={
          <ProfileCardSkeleton />
        }
      />
    )
  }

  if (error) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
            <TextDeprecated
              theme={TextTheme.ERROR}
              title={t('error-load-data')}
              text={t('please-reload-page')}
              data-testid={'profile-card-error'}
            />
          </div>
        }
        on={
          <div className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
            <Text
              variant={'error'}
              title={t('error-load-data')}
              text={t('please-reload-page')}
              data-testid={'profile-card-error'}
              align={'center'}
            />
          </div>
        }
      />
    )
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <VStackDeprecated className={classNames(cls.ProfileCard, mods, [className])}>
          {data?.avatar && <AvatarDeprecated src={data?.avatar} />}

          <InputDeprecated
            value={data?.first}
            placeholder={t('profile-input-firstname')}
            className={cls.input}
            onChange={onChangeFirstname}
            readonly={readonly}
            data-testid={'profile-card-firstname'}
          />
          <InputDeprecated
            value={data?.lastname}
            placeholder={t('profile-input-lastname')}
            className={cls.input}
            onChange={onChangeLastname}
            readonly={readonly}
            data-testid={'profile-card-lastname'}
          />
          <InputDeprecated
            value={data?.age}
            placeholder={t('profile-input-age')}
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
            type={'number'}
            data-testid={'profile-card-age'}
          />
          <InputDeprecated
            value={data?.city}
            placeholder={t('profile-input-city')}
            className={cls.input}
            onChange={onChangeCity}
            readonly={readonly}
            data-testid={'profile-card-city'}
          />
          <InputDeprecated
            value={data?.username}
            placeholder={t('profile-input-username')}
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
            data-testid={'profile-card-username'}
          />
          <InputDeprecated
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
        </VStackDeprecated>
      }
      on={
        <Card
          padding={'24'}
          className={classNames('', {}, [className])}
          isMax
        >
          <VStack gap={32}>
            {
              data?.avatar && (
                <HStack align={'center'} justify={'center'}>
                  <Avatar size={120} src={data?.avatar} />
                </HStack>
              )
            }
            <HStack gap={24} isMax>
              <VStack gap={16} isMax>
                <Input
                  value={data?.first}
                  label={t('profile-input-firstname')}
                  onChange={onChangeFirstname}
                  readonly={readonly}
                  data-testid={'profile-card-firstname'}
                />
                <Input
                  value={data?.lastname}
                  label={t('profile-input-lastname')}
                  onChange={onChangeLastname}
                  readonly={readonly}
                  data-testid={'profile-card-lastname'}
                />
                <Input
                  value={data?.age}
                  label={t('profile-input-age')}
                  onChange={onChangeAge}
                  readonly={readonly}
                  type={'number'}
                  data-testid={'profile-card-age'}
                />
                <Input
                  value={data?.city}
                  label={t('profile-input-city')}
                  onChange={onChangeCity}
                  readonly={readonly}
                  data-testid={'profile-card-city'}
                />
              </VStack>
              <VStack gap={16} isMax>
                <Input
                  value={data?.username}
                  label={t('profile-input-username')}
                  onChange={onChangeUsername}
                  readonly={readonly}
                  data-testid={'profile-card-username'}
                />
                <Input
                  value={data?.avatar}
                  label={t('profile-input-avatar')}
                  onChange={onChangeAvatar}
                  readonly={readonly}
                  data-testid={'profile-card-avatar'}
                />
                <CurrencySelect
                  value={data?.currency}
                  onChange={onChangeCurrency}
                  label={t('profile-input-currency')}
                  readonly={readonly}
                  data-testid={'profile-card-currency'}
                />
                <CountrySelect
                  value={data?.country}
                  onChange={onChangeCountry}
                  label={t('profile-input-country')}
                  readonly={readonly}
                  data-testid={'profile-card-country'}
                />
              </VStack>
            </HStack>
          </VStack>
        </Card>
      }
    />

  )
})
