import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../../../types/status';
import { CountryInfoDetailed } from '../../../types/countries';
import { fetchCountryByName } from './thunks';

type State = {
    entity: CountryInfoDetailed | null;
    status: Status;
    statusCode: string | null;
};

const initialState: State = {
    entity: null,
    status: 'idle',
    statusCode: null,
};

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        clearCountry(state) {
            state.entity = null;
            state.status = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryByName.pending, (state) => {
                state.entity = null;
                state.status = 'loading';
                state.statusCode = null;
            })
            .addCase(fetchCountryByName.rejected, (state, payload) => {
                state.status = 'error';
                state.statusCode = payload.error.code || null;
            })
            .addCase(fetchCountryByName.fulfilled, (state, action) => {
                state.status = 'success';
                state.entity = action.payload[0];
            });
    },
});

export const { clearCountry } = countrySlice.actions;
export const countryReducer = countrySlice.reducer;
