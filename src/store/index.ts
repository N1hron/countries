import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {},
    devTools: import.meta.env.DEV,
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
