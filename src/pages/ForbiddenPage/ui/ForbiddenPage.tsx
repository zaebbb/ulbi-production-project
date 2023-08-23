import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePath } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage: React.FC<ForbiddenPageProps> = memo((props: ForbiddenPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap={16}>
        <Text
          size={TextSize.L}
          title={t('access-denied')}
        />
        <AppLink to={RoutePath.main}>
          <Button
            theme={ThemeButton.OUTLINE}
          >
            {t('to-main-page')}
          </Button>
        </AppLink>
      </VStack>
    </Page>
  )
})

export default ForbiddenPage
