import { Action, combineReducers, configureStore, EnhancedStore, Store, ThunkAction } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, WebStorage } from 'redux-persist'

import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { sidebarSlice } from './sidebar.redux'

type configType = {
  key: string
  storage: WebStorage
  whitelist?: string[]
}

const config: configType = {
  key: 'root',
  storage,
  whitelist: [
    sidebarSlice.name
  ],
}

const root = combineReducers({
  [sidebarSlice.name]: sidebarSlice.reducer
})

const persisted = persistReducer(config, root)

export const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
        serializableCheck: {
           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
     }).concat(logger),
     devTools: process.env.NEXT_PUBLIC_NODE_ENV !== 'production'
})

const setupStore = (_: any): EnhancedStore => store
const makeStore: MakeStore<any> = (context: any) => setupStore(context)

export const persistor = persistStore(store)
export const wrapper = createWrapper<Store>(makeStore)

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>