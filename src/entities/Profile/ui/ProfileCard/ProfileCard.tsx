import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const {
    className,
  } = props
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button
          theme={ThemeButton.OUTLINE}
          className={cls['edit-btn']}
        >
          {t('profile-edit')}
        </Button>
      </div>

      <div className={cls.info}>
        <Input
          value={data?.first}
          placeholder={t('profile-input-firstname')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('profile-input-lastname')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
