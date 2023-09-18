import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

import cls from './ArticlePageFilters.module.scss'

import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTabs } from '@/features/ArticleTypeTabs'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/deprecated/Input'

interface ArticlePageFiltersProps {
  className?: string
}

export const ArticlePageFilters: React.FC<ArticlePageFiltersProps> =
  memo((props: ArticlePageFiltersProps) => {
    const { className } = props
    const { t } = useTranslation()

    const {
      onChangeSearch,
      sort,
      order,
      onChangeSort,
      onChangeOrder,
      search,
      type,
      onChangeType,
    } = useArticleFilters()

    return (
      <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            sort={sort}
            order={order}
          />
        </div>
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
      </div>
    )
  })
