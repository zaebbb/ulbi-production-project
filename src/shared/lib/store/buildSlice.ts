import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { type SliceCaseReducers, type CreateSliceOptions } from '@reduxjs/toolkit/dist'
import { useMemo } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch'

export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) => {
  const slice = createSlice(options)

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
  }

  return {
    ...slice,
    useActions,
  }
}
