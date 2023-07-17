import React from 'react'
import { useDispatch, useStore } from 'react-redux'
import {
  type ReduxStoreWithManager,
  type StateSchema,
  type StateSchemaKey,
} from 'app/providers/StoreProvider'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  children: React.ReactNode
  reducers: ReducerList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  React.useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers()

    Object.entries(reducers).forEach(([keyName, reducer]) => {
      const mounted = mountedReducers[keyName as StateSchemaKey]

      if (!mounted) {
        store.reducerManager.add(keyName as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${keyName} reducer` })
      }
    })

    return () => {
      Object.entries(reducers).forEach(([keyName, reducer]) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(keyName as StateSchemaKey)
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
