import React, { useCallback } from 'react'

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer = React.useRef<any>()

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
    }, delay)
  }, [callback, delay])
}
