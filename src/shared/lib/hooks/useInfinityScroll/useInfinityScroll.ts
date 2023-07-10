import React, { type MutableRefObject } from 'react'

export interface useInfinityScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLDivElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfinityScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: useInfinityScrollOptions) => {
  React.useEffect(() => {
    let observer: IntersectionObserver | null = null
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '1px',
        threshold: 1.0,
      }

      observer = new IntersectionObserver((
        [entry]
      ) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElement)

      return () => {
        if (observer && triggerElement) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(triggerElement)
        }
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
