import { createSelector } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'

export const getSaveScroll =
  (state: StateSchema) => state.saveScroll.scroll

export const getSaveScrollByPath =
  createSelector(
    getSaveScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
  )
