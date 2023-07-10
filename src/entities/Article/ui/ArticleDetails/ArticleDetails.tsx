import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'widgets/Icon/Icon'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails: React.FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id,
  } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)

  const renderBlock = React.useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent
          key={block.id}
          block={block}
          className={cls.block}
        />
      default:
        return null
    }
  }, [])

  React.useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton width={100} height={100} border={'50%'} className={cls.avatar} />
        <Skeleton width={400} height={32} border={'8px'} className={cls.title} />
        <Skeleton width={300} height={24} border={'8px'} className={cls.skeleton} />
        <Skeleton width={'100%'} height={100} border={'8px'} className={cls.skeleton} />
        <Skeleton width={'100%'} height={100} border={'8px'} className={cls.skeleton} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        title={t('error-loading-article')}
        theme={TextTheme.ERROR}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            className={cls.avatar}
            src={article?.image}
            sizeType={AvatarSize.MEDIUM}
          />
        </div>
        <Text
          title={article?.title}
          text={article?.subtitle}
          className={cls.title}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text
            text={String(article?.views)}
            className={cls.infoText}
          />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text
            text={article?.createdAt}
            className={cls.infoText}
          />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})