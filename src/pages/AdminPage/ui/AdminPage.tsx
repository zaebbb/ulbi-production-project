import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './AdminPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { Page } from '@/widgets/Page'

interface AdminPageProps {
  className?: string
}

const AdminPage: React.FC<AdminPageProps> = memo((props: AdminPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page data-testid={'AdminPage'} className={classNames(cls.AdminPage, {}, [className])}>
      <Text size={TextSize.L} title={t('admin-page')} />
    </Page>
  )
})

export default AdminPage
