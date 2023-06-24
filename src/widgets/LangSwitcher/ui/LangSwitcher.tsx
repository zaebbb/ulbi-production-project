import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

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
    <Button
      className={
        classNames('',
          {},
          [className])
      }
      onClick={toggle}
      theme={ThemeButton.CLEAR_INVERTED}
    >
      {t(!short ? 'language' : 'language-short')}
    </Button>
  )
})
