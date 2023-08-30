import React, { memo } from 'react'
import { Icon } from '../Icon'
import cls from './StarRating.module.scss'
import StarIcon from '@/shared/assets/icons/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating: React.FC<StarRatingProps> = memo((props: StarRatingProps) => {
  const {
    className,
    onSelect,
    size = 30,
    selectedStars = 0,
  } = props

  const [currentStartCount, setCurrentStartCount] = React.useState(selectedStars)
  const [isSelected, setIsSelected] = React.useState(Boolean(selectedStars))

  const onHover = React.useCallback((starCount: number) => () => {
    if (!isSelected) {
      setCurrentStartCount(starCount)
    }
  }, [isSelected])

  const onLeave = React.useCallback(() => {
    if (!isSelected) {
      setCurrentStartCount(0)
    }
  }, [isSelected])

  const onClick = React.useCallback((starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount)
      setCurrentStartCount(starCount)
      setIsSelected(true)
    }
  }, [isSelected, onSelect])

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((star) => (
        <Icon
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          onClick={onClick(star)}
          Svg={StarIcon}
          key={star}
          className={
            classNames(
              cls['star-icon'],
              {
                [cls.hovered]: currentStartCount >= star,
                [cls.normal]: currentStartCount < star,
                [cls.selected]: isSelected,
              },
              []
            )
          }
          width={size}
          height={size}
          data-testid={`star-rating-${star}`}
          data-selected={currentStartCount >= star}
        />
      ))}
    </div>
  )
})
