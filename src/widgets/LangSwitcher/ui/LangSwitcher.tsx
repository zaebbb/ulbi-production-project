import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
  const { className = '' } = props
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch(e => { console.log(e.message) })
  }

  return (
    <Button
      className={
        classNames('',
          {},
          [className])
      }
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t('language')}
    </Button>
  )
}
