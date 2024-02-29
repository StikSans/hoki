import { configureStore } from "@reduxjs/toolkit"
import { countryApi } from "@/lib/api/caountry"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
})

setupListeners(store.dispatch)
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
