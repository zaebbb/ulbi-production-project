import React, { useMemo } from 'react'

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHoverResult = [
  boolean,
  UseHoverBind
]

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = React.useState<boolean>(false)

  const onMouseEnter = React.useCallback(() => {
    setIsHover(true)
  }, [])

  const onMouseLeave = React.useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => [
    isHover,
    {
      onMouseEnter,
      onMouseLeave,
    },
  ], [isHover, onMouseEnter, onMouseLeave])
}
