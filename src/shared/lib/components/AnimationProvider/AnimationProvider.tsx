import React, { createContext } from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
  Gesture?: GestureType
  Spring?: SpringType
  isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextPayload>({})

const getAsyncAnimationModules = async () => {
  return await Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
  ])
}

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const SpringRef = React.useRef<SpringType>()
  const GestureRef = React.useRef<GestureType>()
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [])

  const value = React.useMemo(() => ({
    Gesture: GestureRef.current,
    Spring: SpringRef.current,
    isLoaded,
  }), [isLoaded])

  return (
    <AnimationContext.Provider
      value={value}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimationLibs = () => {
  return React.useContext(AnimationContext) as Required<AnimationContextPayload>
}
