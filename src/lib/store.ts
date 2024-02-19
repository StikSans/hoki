import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        // password: passwordSlice,
    }
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
