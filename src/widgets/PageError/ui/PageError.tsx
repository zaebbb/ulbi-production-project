import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: React.FC<PageErrorProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  const pageReload = (): void => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('unexpected-error')}</p>
      <Button onClick={pageReload}>
        {t('reload-page')}
      </Button>
    </div>
  )
}
