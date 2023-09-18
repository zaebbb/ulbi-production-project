import React, { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleTabs.module.scss'
import { ArticleType } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs'
import { Tabs, type TabItem } from '@/shared/ui/redesigned/Tabs'

interface ArticleTabsProps {
  className?: string
  type: ArticleType
  onChangeType: (tab: TabItem) => void
}

export const ArticleTabs: React.FC<ArticleTabsProps> = memo((props: ArticleTabsProps) => {
  const {
    className,
    type,
    onChangeType,
  } = props
  const { t } = useTranslation()

  const typeTabs: TabItem[] = useMemo(() => [
    { value: ArticleType.ALL, content: t('article-type-all') },
    { value: ArticleType.ECONOMICS, content: t('article-type-economic') },
    { value: ArticleType.IT, content: t('article-type-it') },
    { value: ArticleType.SCIENCE, content: t('article-type-science') },
  ], [t])

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <div className={classNames(cls.ArticleTabs, {}, [className])}>
          <TabsDeprecated
            tabs={typeTabs}
            value={type}
            onTabClick={onChangeType}
          />
        </div>
      }
      on={
        <div className={classNames(cls.ArticleTabs, {}, [className])}>
          <Tabs
            direction={'column'}
            tabs={typeTabs}
            value={type}
            onTabClick={onChangeType}
          />
        </div>
      }
    />
  )
})
