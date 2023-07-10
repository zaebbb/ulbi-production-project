import React, { memo, type MutableRefObject } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll'

interface PageProps {
  className?: string
  children: React.ReactNode
  onScrollEnd?: () => void
}

export const Page: React.FC<PageProps> = memo((props: PageProps) => {
  const {
    className,
    children,
    onScrollEnd,
  } = props
  const wrapperRef = React.useRef() as MutableRefObject<HTMLElement>
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>

  useInfinityScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  })

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
})
