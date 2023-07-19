import React, { memo, type MutableRefObject, type UIEvent } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getSaveScrollByPath, saveScrollActions } from 'features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
  className?: string
  children: React.ReactNode
  onScrollEnd?: () => void
  isSaveScroll?: boolean
}

export const Page: React.FC<PageProps> = memo((props: PageProps) => {
  const {
    className,
    children,
    onScrollEnd,
    isSaveScroll = true,
  } = props
  const wrapperRef = React.useRef() as MutableRefObject<HTMLElement>
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getSaveScrollByPath(state, pathname))

  useInfinityScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (isSaveScroll) {
      dispatch(saveScrollActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }))
    }
  }, 500)

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {
        onScrollEnd && isSaveScroll ? <div className={cls.trigger} ref={triggerRef} /> : null
      }
    </section>
  )
})