import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './slices/themeSlice';

const store = configureStore({
    reducer: { theme: themeReducer },
    devTools: import.meta.env.DEV,
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
