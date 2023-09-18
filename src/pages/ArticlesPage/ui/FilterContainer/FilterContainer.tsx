import React, { memo } from 'react'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'
import { ArticlesFilters } from '@/widgets/ArticlesFilters'

interface FilterContainerProps {
  className?: string
}

export const FilterContainer: React.FC<FilterContainerProps> =
  memo((props: FilterContainerProps) => {
    const {
      className,
    } = props

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
      <ArticlesFilters
        className={className}
        sort={sort}
        order={order}
        onChangeSort={onChangeSort}
        onChangeOrder={onChangeOrder}
        type={type}
        onChangeType={onChangeType}
        search={search}
        onChangeSearch={onChangeSearch}
      />
    )
  })
