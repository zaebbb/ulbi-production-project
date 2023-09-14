import React, { memo } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import cls from './RatingCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { Drawer } from '@/shared/ui/Drawer'
import { Input } from '@/shared/ui/Input'
import { Modal } from '@/shared/ui/Modal'
import { HStack } from '@/shared/ui/Stack/Hstack/HStack'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { StarRating } from '@/shared/ui/StarRating'
import { Text } from '@/shared/ui/Text'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard: React.FC<RatingCardProps> = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props
  const { t } = useTranslation()

  const [isOpenFeedback, setIsOpenFeedback] = React.useState(false)
  const [starsCount, setStarsCount] = React.useState(rate)
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
        data-testid={'rating-card-input'}
      />
    </>

  )

  return (
    <Card
      data-testid={'RatingCard'}
      className={classNames(cls.RatingCard, {}, [className])}
    >
      <VStack align={'center'} gap={16}>
        <Text title={title} />
        <StarRating size={50} onSelect={onSelectStarts} selectedStars={starsCount} />
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
                data-testid={'rating-card-send'}
              >
                {t('send-rating')}
              </Button>
              <Button
                onClick={cancelHandler}
                theme={ThemeButton.OUTLINE}
                data-testid={'rating-card-close'}
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
