import React, { type HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { List, type ListRowProps, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'widgets/Page/ui/Page'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItem.skeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type Article, ArticleView } from '../../model/types/article'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  virtualized?: boolean
}

const getSkeleton = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, i) => (
    <ArticleListItemSkeleton
      className={cls.card}
      view={view}
      key={i}
    />
  ))
}

export const ArticleList: React.FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
    virtualized = true,
  } = props
  const { t } = useTranslation()

  const isBig = view === ArticleView.BIG

  const itemsPerRow = isBig ? 1 : 3
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)

  const rowRenderer = ({ index, isScrolling, isVisible, key, style }: ListRowProps) => {
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex * itemsPerRow, articles.length)

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
          key={articles[i].id}
        />
      )
    }

    return (
      <div
        key={key}
        className={cls.row}
        style={style}
      >
        {items}
      </div>
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text text={t('articles-not-found')} />
      </div>
    )
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width,
        height,
        registerChild,
        scrollTop,
        onChildScroll,
        isScrolling,
      }) => (
        <div
          ref={registerChild}
          className={
            classNames(cls.ArticleList, {}, [className, cls[view]])
          }
        >
          {
            virtualized ? (
              <List
                height={height ?? 700}
                rowCount={rowCount}
                rowHeight={isBig ? 700 : 330}
                rowRenderer={rowRenderer}
                width={width ? width - 80 : 700}
                autoHeight
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
              />
            ) : (
              articles.map(article => (
                <ArticleListItem
                  article={article}
                  view={view}
                  target={target}
                  key={article.id}
                  className={cls.card}
                />
              ))
            )
          }

          {
            isLoading && getSkeleton(view)
          }
        </div>
      )}
    </WindowScroller>

  )
})
