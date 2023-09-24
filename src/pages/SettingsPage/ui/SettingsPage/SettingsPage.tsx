import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Page } from '@/widgets/Page'

interface SettingsPageProps {
  className?: string
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack>
        <Text title={t('settings-user')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  )
})

export default SettingsPage
