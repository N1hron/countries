import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';

import getDefaultTheme from '../../../utils/getDefaultTheme';

const initialState = getDefaultTheme();

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(_, action: PayloadAction<typeof initialState>) {
            return action.payload;
        },
    },
});

export const themeReducer = themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
