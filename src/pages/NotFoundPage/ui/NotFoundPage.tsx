import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page data-testid={'NotFoundPage'} className={classNames(cls.NotFoundPage, {}, [className])}>
      <h1>{t('not-found')}</h1>
    </Page>
  )
}
