import React, { memo } from 'react'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from '@/entities/Article'
import ListIconDeprecated from '@/shared/assets/icons/bi_list.svg'
import TiledIconDeprecated from '@/shared/assets/icons/fe_tiled.svg'
import TiledIcon from '@/shared/assets/icons/redesigned/ArticleViewSelectorBig.svg'
import ListIcon from '@/shared/assets/icons/redesigned/ArticleViewSelectorSmall.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    Icon: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => TiledIconDeprecated,
      on: () => TiledIcon,
    }),
  },
  {
    view: ArticleView.BIG,
    Icon: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => ListIconDeprecated,
      on: () => ListIcon,
    }),
  },
]

export const ArticleViewSelector: React.FC<ArticleViewSelectorProps> =
  memo((props: ArticleViewSelectorProps) => {
    const {
      className,
      view,
      onViewClick,
    } = props

    const onClick = (view: ArticleView) => () => {
      onViewClick?.(view)
    }

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {
              viewTypes.map(viewType => (
                <ButtonDeprecated
                  theme={ThemeButton.CLEAR}
                  key={viewType.view}
                  onClick={onClick(viewType.view)}
                >
                  <IconDeprecated
                    Svg={viewType.Icon}
                    className={classNames('', { [cls.selected]: viewType.view === view })}
                  />
                </ButtonDeprecated>
              ))
            }
          </div>
        }
        on={
          <Card
            borderRadius={'round'}
            className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}
          >
            <HStack gap={8}>
              {viewTypes.map(viewType => (
                <Icon
                  key={viewType.view}
                  Svg={viewType.Icon}
                  onClick={onClick(viewType.view)}
                  clickable
                  className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                />
              ))}
            </HStack>
          </Card>
        }
      />
    )
  })
