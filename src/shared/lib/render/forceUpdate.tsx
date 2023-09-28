import React from 'react'

const ForceUpdateContext = React.createContext({
  value: true,
  forceUpdate: () => {},
})

export const useForceUpdate = () => {
  const { forceUpdate } = React.useContext(ForceUpdateContext)

  return forceUpdate
}

export const ForceUpdateProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = React.useState(true)

  const forceUpdate = () => {
    setValue(prev => !prev)
    setTimeout(() => {
      setValue(prev => !prev)
    }, 0)
  }

  const valueContext = React.useMemo(() => {
    return { value, forceUpdate }
  }, [value])

  if (!value) {
    return null
  }

  return (
    <ForceUpdateContext.Provider value={valueContext}>
      {children}
    </ForceUpdateContext.Provider>
  )
}
