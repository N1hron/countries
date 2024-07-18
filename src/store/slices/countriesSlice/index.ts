import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchAllCountries } from './thunks';
import { Country } from '../../../types/countries';
import { Status } from '../../../types/status';

type State = {
    entities: Country[];
    status: Status;
    limit: number;
};

const initialState: State = {
    entities: [],
    status: 'idle',
    limit: 0,
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setLimit(state, action: PayloadAction<number>) {
            const newLimit = action.payload;
            const maxLimit = state.entities.length;

            if (newLimit > maxLimit) {
                state.limit = maxLimit;
            } else if (newLimit < 1) {
                state.limit = 1;
            } else {
                state.limit = newLimit;
            }
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
                state.limit = Math.min(8, action.payload.length);
            });
    },
});

export const countriesReducer = countriesSlice.reducer;
export const { setLimit } = countriesSlice.actions;
export { fetchAllCountries };
