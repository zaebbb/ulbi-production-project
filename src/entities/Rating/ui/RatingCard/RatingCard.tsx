import React, { memo } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import cls from './RatingCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal'
import { HStack as HStackDeprecated } from '@/shared/ui/deprecated/Stack/Hstack/HStack'
import { VStack as VStackDeprecated } from '@/shared/ui/deprecated/Stack/VStack/VStack'
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Input } from '@/shared/ui/redesigned/Input'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack'
import { StarRating } from '@/shared/ui/redesigned/StarRating'
import { Text } from '@/shared/ui/redesigned/Text'

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

  const Card = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => CardRedesigned,
    off: () => CardDeprecated,
  })

  const contentFeedback = (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            placeholder={t('your-feedback')}
            onChange={setFeedback}
            value={feedback}
            data-testid={'rating-card-input'}
          />
        </>
      }
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            placeholder={t('your-feedback')}
            onChange={setFeedback}
            value={feedback}
            data-testid={'rating-card-input'}
          />
        </>
      }
    />
  )

  return (
    <Card
      data-testid={'RatingCard'}
      className={classNames(cls.RatingCard, {}, [className])}
      padding={'24'}
      isMax
      borderRadius={'round'}
    >
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <VStackDeprecated align={'center'} gap={16}>
            <TextDeprecated title={title} />
            <StarRatingDeprecated size={50} onSelect={onSelectStarts} selectedStars={starsCount} />
          </VStackDeprecated>
        }
        on={
          <VStack align={'center'} gap={16}>
            <Text title={title} />
            <StarRating size={50} onSelect={onSelectStarts} selectedStars={starsCount} />
          </VStack>
        }
      />

      <BrowserView>
        <ToggleFeatures
          feature={'isAppRedesigned'}
          off={
            <ModalDeprecated isOpen={isOpenFeedback}>
              <VStackDeprecated gap={16}>
                {contentFeedback}
                <HStackDeprecated gap={16} justify={'end'}>
                  <ButtonDeprecated
                    onClick={acceptHandler}
                    theme={ThemeButton.BACKGROUND_INVERTED}
                    className={cls.sendBtn}
                    data-testid={'rating-card-send'}
                  >
                    {t('send-rating')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    onClick={cancelHandler}
                    theme={ThemeButton.OUTLINE}
                    data-testid={'rating-card-close'}
                  >
                    {t('close-rating-modal')}
                  </ButtonDeprecated>
                </HStackDeprecated>
              </VStackDeprecated>
            </ModalDeprecated>
          }
          on={
            <Modal isOpen={isOpenFeedback}>
              <VStack gap={16}>
                {contentFeedback}
                <HStack gap={16} justify={'end'}>
                  <Button
                    onClick={acceptHandler}
                    className={cls.sendBtn}
                    data-testid={'rating-card-send'}
                  >
                    {t('send-rating')}
                  </Button>
                  <Button
                    onClick={cancelHandler}
                    data-testid={'rating-card-close'}
                  >
                    {t('close-rating-modal')}
                  </Button>
                </HStack>
              </VStack>
            </Modal>
          }
        />
      </BrowserView>

      <MobileView>
        <ToggleFeatures
          feature={'isAppRedesigned'}
          off={
            <DrawerDeprecated isOpen={isOpenFeedback} onClose={cancelHandler}>
              <VStackDeprecated gap={16}>
                {contentFeedback}
                <ButtonDeprecated
                  onClick={acceptHandler}
                  theme={ThemeButton.OUTLINE}
                  fullWidth
                >
                  {t('send-rating')}
                </ButtonDeprecated>
              </VStackDeprecated>
            </DrawerDeprecated>
          }
          on={
            <Drawer isOpen={isOpenFeedback} onClose={cancelHandler}>
              <VStack gap={16}>
                {contentFeedback}
                <Button
                  onClick={acceptHandler}
                  size={'l'}
                  fullWidth
                >
                  {t('send-rating')}
                </Button>
              </VStack>
            </Drawer>
          }
        />
      </MobileView>
    </Card>
  )
})
