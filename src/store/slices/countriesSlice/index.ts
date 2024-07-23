import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchAllCountries } from './thunks';
import { Country, Region } from '../../../types/countries';
import { Status } from '../../../types/status';

type State = {
    entities: Country[];
    status: Status;
    limit: number;
    filter: {
        search: string;
        region: Region;
    };
};

const initialState: State = {
    entities: [],
    status: 'idle',
    limit: 0,
    filter: {
        search: '',
        region: 'All',
    },
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
        setFilter(state, action: PayloadAction<State['filter']>) {
            state.filter = action.payload;
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
export const { setLimit, setFilter } = countriesSlice.actions;
export { fetchAllCountries };
