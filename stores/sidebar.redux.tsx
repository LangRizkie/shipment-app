import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store.redux'

export interface SidebarState {
  index: number | undefined,
  isOpen: boolean
}

const initialState: SidebarState = {
  index: undefined,
  isOpen: false
}

export const sidebarSlice = createSlice({
  initialState,
  name: 'sidebar',
  reducers: {
    setSidebarIndex(state, action) {
      state.index = action.payload
    },
    setSidebarState(state, action) {
      state.isOpen = action.payload
    }
  }
})

export const { setSidebarIndex, setSidebarState } = sidebarSlice.actions

export const sidebarIndex = (state: AppState) => state.sidebar.index
export const sidebarState = (state: AppState) => state.sidebar.isOpen

export default sidebarSlice.reducer