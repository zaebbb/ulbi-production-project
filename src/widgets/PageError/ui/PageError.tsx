import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './PageError.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'

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
