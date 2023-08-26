import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const MainPage: React.FC = () => {
  const { t } = useTranslation('main')

  return (
    <Page data-testid={'MainPage'}>
      <h1>{t('main')}</h1>
    </Page>
  )
}

export default MainPage
