import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';

import getInitialTheme from './getInitialTheme';

const initialState = getInitialTheme();

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(_, action: PayloadAction<typeof initialState>) {
            return action.payload;
        },
    },
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
