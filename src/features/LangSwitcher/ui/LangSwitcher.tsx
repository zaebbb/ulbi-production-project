import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
  const {
    className = '',
    short = false,
  } = props
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n
      .changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
      .catch(e => { console.log(e.message) })
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <ButtonDeprecated
          className={
            classNames('',
              {},
              [className])
          }
          onClick={toggle}
          theme={ThemeButton.CLEAR_INVERTED}
        >
          {t(!short ? 'language' : 'language-short')}
        </ButtonDeprecated>
      }
      on={
        <Button
          className={
            classNames('',
              {},
              [className])
          }
          onClick={toggle}
          variant={'clear'}
        >
          {t(!short ? 'language' : 'language-short')}
        </Button>
      }
    />
  )
})
