import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'
import cls from './RatingCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/widgets/Card'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { HStack } from '@/shared/ui/Stack/Hstack/HStack'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard: React.FC<RatingCardProps> = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
  } = props
  const { t } = useTranslation()

  const [isOpenFeedback, setIsOpenFeedback] = React.useState(false)
  const [starsCount, setStarsCount] = React.useState(0)
  const [feedback, setFeedback] = React.useState('')

  const onSelectStarts = React.useCallback((selectStartCount: number) => {
    setStarsCount(selectStartCount)
    if (hasFeedback) {
      setIsOpenFeedback(true)
    } else {
      onAccept?.(selectStartCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandler = React.useCallback(() => {
    setIsOpenFeedback(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = React.useCallback(() => {
    setIsOpenFeedback(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const contentFeedback = (
    <>
      <Text title={feedbackTitle} />
      <Input
        placeholder={t('your-feedback')}
        onChange={setFeedback}
        value={feedback}
      />
    </>

  )

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align={'center'} gap={16}>
        <Text title={title} />
        <StarRating size={50} onSelect={onSelectStarts} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isOpenFeedback}>
          <VStack gap={16}>
            {contentFeedback}
            <HStack gap={16} justify={'end'}>
              <Button
                onClick={acceptHandler}
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.sendBtn}
              >
                {t('send-rating')}
              </Button>
              <Button
                onClick={cancelHandler}
                theme={ThemeButton.OUTLINE}
              >
                {t('close-rating-modal')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer isOpen={isOpenFeedback} onClose={cancelHandler}>
          <VStack gap={16}>
            {contentFeedback}
            <Button
              onClick={acceptHandler}
              theme={ThemeButton.OUTLINE}
              fullWidth
            >
              {t('send-rating')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
})