import React, { memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select, type SelectOption } from 'shared/ui/Select/Select'
import { type SortOrder } from 'shared/types'
import { ArticleSortField } from '../../model/types/article'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector: React.FC<ArticleSortSelectorProps> =
  memo((props: ArticleSortSelectorProps) => {
    const {
      className,
      sort,
      order,
      onChangeSort,
      onChangeOrder,
    } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
      { content: t('article-sort-asc'), value: 'asc' },
      { content: t('article-sort-desc'), value: 'desc' },
    ], [t])

    const sortOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
      { content: t('article-sort-date'), value: ArticleSortField.CREATED },
      { content: t('article-sort-title'), value: ArticleSortField.TITLE },
      { content: t('article-sort-views'), value: ArticleSortField.VIEWS },
    ], [t])

    return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select
          label={t('article-sorting')}
          options={sortOptions}
          onChange={onChangeSort}
          value={sort}
        />
        <Select
          label={t('article-sorting-to')}
          options={orderOptions}
          onChange={onChangeOrder}
          value={order}
        />
      </div>
    )
  })
