import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const readonly = useSelector(getProfileReadonly)

  const onEdit = React.useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = React.useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = React.useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile')} />

      {canEdit && (
        <>
          {readonly ? (
            <Button
              theme={ThemeButton.OUTLINE}
              className={cls['edit-btn']}
              onClick={onEdit}
            >
              {t('profile-edit')}
            </Button>
          ) : (
            <>
              <Button
                theme={ThemeButton.OUTLINE_RED}
                className={cls['edit-btn']}
                onClick={onCancelEdit}
              >
                {t('profile-escape')}
              </Button>
              <Button
                theme={ThemeButton.OUTLINE}
                className={cls['save-btn']}
                onClick={onSave}
              >
                {t('profile-save')}
              </Button>
            </>
          )
          }
        </>
      )}
    </div>
  )
}
