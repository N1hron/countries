import { createSlice } from '@reduxjs/toolkit';

import { fetchAllCountries } from './thunks';
import { Country } from '../../../types/countries';
import { Status } from '../../../types/status';

type State = {
    entities: Country[];
    status: Status;
};

const initialState: State = { entities: [], status: 'idle' };

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
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
