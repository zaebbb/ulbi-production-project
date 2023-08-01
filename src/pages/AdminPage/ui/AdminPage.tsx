import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page'
import cls from './AdminPage.module.scss'

interface AdminPageProps {
  className?: string
}

const AdminPage: React.FC<AdminPageProps> = memo((props: AdminPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page className={classNames(cls.AdminPage, {}, [className])}>
      <Text size={TextSize.L} title={t('admin-page')} />
    </Page>
  )
})

export default AdminPage