import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleEditPage.module.scss'
import { Page } from 'widgets/Page'
import { useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage: React.FC<ArticleEditPageProps> = memo((props: ArticleEditPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      <Text
        size={TextSize.L}
        title={isEdit ? `${t('edit-article')} ${id ?? ''}` : t('create-article')}
      />
    </Page>
  )
})

export default ArticleEditPage
