import React, { type ImgHTMLAttributes, memo } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: React.ReactElement
  errorFallback?: React.ReactElement
}

/**
 * @deprecated
 * */
export const AppImage: React.FC<AppImageProps> = memo((props: AppImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  } = props
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  React.useLayoutEffect(() => {
    const img = new Image()
    img.src = src ?? ''
    img.onload = () => {
      setIsLoading(false)
    }
    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [src])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  return (
    <img className={className} src={src} alt={alt} {...otherProps} />
  )
})
