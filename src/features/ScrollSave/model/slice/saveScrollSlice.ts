import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type SaveScrollSchema } from '../types/saveScrollSchema'

const initialState: SaveScrollSchema = {
  scroll: {},
}

export const saveScrollSlice = createSlice({
  name: 'saveScrollSlice',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string, position: number }>
    ) => {
      state.scroll[payload.path] = payload.position
    },
  },
  extraReducers: (builder) => {

  },
})

export const { actions: saveScrollActions } = saveScrollSlice
export const { reducer: saveScrollReducer } = saveScrollSlice
