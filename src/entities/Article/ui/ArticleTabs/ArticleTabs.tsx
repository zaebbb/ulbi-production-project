import React, { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleType } from '../../model/types/article'
import cls from './ArticleTabs.module.scss'
import { type TabItem, Tabs } from '@/shared/ui/Tabs'
import { classNames } from '@/shared/lib/classNames/classNames'

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
    <div className={classNames(cls.ArticleTabs, {}, [className])}>
      <Tabs
        tabs={typeTabs}
        value={type}
        onTabClick={onChangeType}
      />
    </div>
  )
})
