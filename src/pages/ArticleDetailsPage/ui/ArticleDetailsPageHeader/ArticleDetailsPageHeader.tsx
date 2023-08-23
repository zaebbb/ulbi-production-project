import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCanEditArticle } from '../../model/selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'
import { getArticleDetailsData } from '@/entities/Article'
import { RoutePath } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader: React.FC<ArticleDetailsPageHeaderProps> =
  memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation()
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = React.useCallback(() => {
      navigate(RoutePath.articles)
    }, [navigate])

    const onEdit = React.useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id ?? '0'}/edit`)
    }, [article?.id, navigate])

    return (
      <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onBackToList}
        >
          {t('button-back')}
        </Button>
        {
          canEdit && (
            <Button
              theme={ThemeButton.OUTLINE}
              onClick={onEdit}
              className={cls.editBtn}
            >
              {t('button-article-edit')}
            </Button>
          )
        }
      </div>
    )
  })
