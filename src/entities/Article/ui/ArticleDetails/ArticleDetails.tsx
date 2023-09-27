import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import cls from './ArticleDetails.module.scss'
import { ArticleDetailsSkeleton } from './ArticleDetails.skeleton'
import { renderArticleBlock } from './renderBlock'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar as AvatarDeprecated, AvatarSize } from '@/shared/ui/Avatar'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Text as TextDeprecated, TextSize, TextTheme } from '@/shared/ui/deprecated/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
}

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData)

  return (
    <>
      <div className={cls.avatarWrapper} data-testid={'ArticleDetails'}>
        <AvatarDeprecated
          className={cls.avatar}
          src={article?.image}
          sizeType={AvatarSize.MEDIUM}
        />
      </div>
      <TextDeprecated
        title={article?.title}
        text={article?.subtitle}
        className={cls.title}
        size={TextSize.L}
      />
      <div className={cls.articleInfo}>
        <IconDeprecated Svg={EyeIcon} />
        <TextDeprecated
          text={String(article?.views)}
          className={cls.infoText}
        />
      </div>
      <div className={cls.articleInfo}>
        <IconDeprecated Svg={CalendarIcon} />
        <TextDeprecated
          text={article?.createdAt}
          className={cls.infoText}
        />
      </div>
      {article?.blocks.map(renderArticleBlock)}
    </>
  )
}

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData)

  return (
    <>
      <Text
        title={article?.title}
        size={'l'}
        isBold
      />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={<Skeleton width={'100%'} height={420} border={'16px'} />}
        src={article?.image}
        className={cls.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  )
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

  React.useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <ArticleDetailsSkeleton />
    )
  } else if (error) {
    content = (
      <TextDeprecated
        title={t('error-loading-article')}
        theme={TextTheme.ERROR}
      />
    )
  } else {
    content = (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={<Deprecated />}
        on={<Redesigned />}
      />
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
