import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage: React.FC = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      <h1>{t('main')}</h1>
      <BugButton />
    </div>
  )
}

export default MainPage
