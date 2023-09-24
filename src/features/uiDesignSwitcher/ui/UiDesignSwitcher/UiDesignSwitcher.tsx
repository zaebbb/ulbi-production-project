import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { getFeatureFlags, updateFeatureFlags } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { type ListBoxItem } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface UiDesignSwitcherProps {
  className?: string
}

type isAppRedesignedType = 'old' | 'new'

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props
  const { t } = useTranslation()
  const isAppRedesigned = getFeatureFlags('isAppRedesigned')
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = React.useState(false)

  const items = React.useMemo((): Array<ListBoxItem<isAppRedesignedType>> => {
    return [
      {
        content: t('used-design-new'),
        value: 'new',
      },
      {
        content: t('used-design-old'),
        value: 'old',
      },
    ]
  }, [t])

  const onChange = React.useCallback(async (item: isAppRedesignedType) => {
    if (authData) {
      setIsLoading(true)
      await dispatch(
        updateFeatureFlags({
          userId: authData.id,
          newFeatures: {
            isAppRedesigned: item === 'new',
          },
        })
      ).unwrap()
      setIsLoading(false)
    }
  }, [authData, dispatch])

  const switcher = (
    <ListBox
      value={isAppRedesigned ? 'new' : 'old'}
      items={items}
      onChange={onChange}
      className={className}
    />
  )

  return (
    <HStack gap={8} align={'center'}>
      <Text text={t('used-design')} />
      {
        isLoading
          ? <Skeleton width={300} height={40} />
          : switcher
      }
    </HStack>
  )
})
