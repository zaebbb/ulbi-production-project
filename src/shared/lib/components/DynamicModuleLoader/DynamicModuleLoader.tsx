import React from 'react'
import { useDispatch, useStore } from 'react-redux'
import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/providers/StoreProvider'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  children: React.ReactNode
  reducers: ReducerList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = false,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  React.useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]: ReducerEntry) => {
      store.reducerManager.add(keyName, reducer)
      dispatch({ type: `@INIT ${keyName} reducer` })
    })

    return () => {
      Object.entries(reducers).forEach(([keyName, reducer]: ReducerEntry) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(keyName)
          dispatch({ type: `@DESTROY ${keyName} reducer` })
        }
      })
    }

    // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}
