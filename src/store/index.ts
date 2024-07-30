import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { themeReducer } from './slices/themeSlice';
import { countriesReducer } from './slices/countriesSlice';
import { countryReducer } from './slices/countrySlice';
import { api } from '../api';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer,
        country: countryReducer,
    },
    devTools: import.meta.env.DEV,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: { extraArgument: { api } } }),
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
