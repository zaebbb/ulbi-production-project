import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type TabItem } from 'src/shared/ui/redesigned/Tabs'
import cls from './ArticlesFilters.module.scss'
import { type ArticleSortField, type ArticleType } from '@/entities/Article'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTabs } from '@/features/ArticleTypeTabs'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type SortOrder } from '@/shared/types/sort'
import { Input } from '@/shared/ui/deprecated/Input'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'

interface ArticlesFiltersProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
  type: ArticleType
  onChangeType: (tab: TabItem) => void
  search: string
  onChangeSearch: (value: string) => void
}

export const ArticlesFilters: React.FC<ArticlesFiltersProps> =
  memo((props: ArticlesFiltersProps) => {
    const {
      className,
      sort,
      order,
      onChangeSort,
      onChangeOrder,
      type,
      onChangeType,
      search,
      onChangeSearch,
    } = props
    const { t } = useTranslation()

    return (
      <Card
        padding={'24'}
        className={classNames(cls.ArticlesFilters, {}, [className])}
      >
        <VStack gap={32}>
          <Input
            placeholder={t('article-search')}
            value={search}
            onChange={onChangeSearch}
          />
          <ArticleTabs
            className={cls.types}
            type={type}
            onChangeType={onChangeType}
          />
          <ArticleSortSelector
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            sort={sort}
            order={order}
          />
        </VStack>
      </Card>
    )
  })
