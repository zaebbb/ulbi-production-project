import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectos'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm: React.FC<AddCommentFormProps> = memo((props: AddCommentFormProps) => {
  const {
    onSendComment,
    className,
  } = props
  const { t } = useTranslation('comment')
  const text = useSelector(getAddCommentFormText)
  const isLoading = useSelector(getAddCommentFormIsLoading)
  const dispatch = useAppDispatch()

  const onCommentTextChange = React.useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = React.useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div
            data-testid={'AddCommentForm'}
            className={classNames(cls.AddCommentForm, {}, [className])}
          >
            <InputDeprecated
              className={cls.input}
              placeholder={t('input-placeholder')}
              value={text}
              onChange={onCommentTextChange}
              readonly={isLoading}
              data-testid={'add-comment-form-input'}
            />
            <ButtonDeprecated
              onClick={onSendHandler}
              theme={ThemeButton.OUTLINE}
              data-testid={'add-comment-form-button'}
            >
              {
                isLoading ? t('load-comment') : t('add-comment')
              }
            </ButtonDeprecated>
          </div>
        }
        on={
          <Card padding={'24'} borderRadius={'round'}>
            <HStack
              justify={'space-between'}
              isMax
              gap={16}
              data-testid={'AddCommentForm'}
              className={classNames(cls.AddCommentForm, {}, [className])}
            >
              <Input
                className={cls.input}
                placeholder={t('input-placeholder')}
                value={text}
                onChange={onCommentTextChange}
                readonly={isLoading}
                data-testid={'add-comment-form-input'}
              />
              <Button
                onClick={onSendHandler}
                variant={'outline'}
                data-testid={'add-comment-form-button'}
              >
                {
                  isLoading ? t('load-comment') : t('add-comment')
                }
              </Button>
            </HStack>
          </Card>
        }
      />
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
