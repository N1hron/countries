import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchAllCountries } from './thunks';
import { Country } from '../../../types/countries';
import { Status } from '../../../types/status';

type State = {
    entities: Country[];
    status: Status;
    limit: number;
};

const initialState: State = { entities: [], status: 'idle', limit: 8 };

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setLimit(state, action: PayloadAction<number>) {
            state.limit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCountries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllCountries.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(fetchAllCountries.fulfilled, (state, action) => {
                state.status = 'success';
                state.entities = action.payload;
            });
    },
});

export const countriesReducer = countriesSlice.reducer;
export { fetchAllCountries };
