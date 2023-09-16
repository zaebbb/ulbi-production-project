import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { getRouteMain } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Page } from '@/widgets/Page'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage: React.FC<ForbiddenPageProps> = memo((props: ForbiddenPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page data-testid={'ForbiddenPage'} className={classNames('', {}, [className])}>
      <VStack gap={16}>
        <Text
          size={TextSize.L}
          title={t('access-denied')}
        />
        <AppLink to={getRouteMain()}>
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
