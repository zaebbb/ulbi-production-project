import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import cls from './EditableProfileCardHeader.module.scss'
import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader: React.FC<EditableProfileCardHeaderProps> =
  memo((props: EditableProfileCardHeaderProps) => {
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
      <HStack
        align={'center'}
        justify={'space-between'}
        className={classNames(cls.ProfilePageHeader, {}, [className])}
      >
        <ToggleFeatures
          feature={'isAppRedesigned'}
          off={<TextDeprecated title={t('profile')} />}
          on={<Text title={t('profile')} />}
        />

        {canEdit && (
          <HStack gap={16}>
            {readonly ? (
              <ToggleFeatures
                feature={'isAppRedesigned'}
                off={
                  <ButtonDeprecated
                    theme={ThemeButton.OUTLINE}
                    onClick={onEdit}
                    data-testid={'editable-profile-card-header-edit-button'}
                  >
                    {t('profile-edit')}
                  </ButtonDeprecated>
                }
                on={
                  <Button
                    onClick={onEdit}
                    data-testid={'editable-profile-card-header-edit-button'}
                  >
                    {t('profile-edit')}
                  </Button>
                }
              />
            ) : (
              <ToggleFeatures
                feature={'isAppRedesigned'}
                off={
                  <>
                    <ButtonDeprecated
                      theme={ThemeButton.OUTLINE_RED}
                      onClick={onCancelEdit}
                      data-testid={'editable-profile-card-header-cancel-edit'}
                    >
                      {t('profile-escape')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      theme={ThemeButton.OUTLINE}
                      onClick={onSave}
                      data-testid={'editable-profile-card-header-edit-save'}
                    >
                      {t('profile-save')}
                    </ButtonDeprecated>
                  </>
                }
                on={
                  <>
                    <Button
                      onClick={onCancelEdit}
                      color={'cancel'}
                      data-testid={'editable-profile-card-header-cancel-edit'}
                    >
                      {t('profile-escape')}
                    </Button>
                    <Button
                      onClick={onSave}
                      color={'success'}
                      data-testid={'editable-profile-card-header-edit-save'}
                    >
                      {t('profile-save')}
                    </Button>
                  </>
                }
              />
            )
            }
          </HStack>
        )}
      </HStack>
    )
  })
