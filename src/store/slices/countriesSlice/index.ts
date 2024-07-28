import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchAllCountries } from './thunks';
import { CountryInfo, Region } from '../../../types/countries';
import { Status } from '../../../types/status';

type State = {
    entities: CountryInfo[];
    status: Status;
    limit: number;
    filter: {
        search: string;
        region: Region;
    };
};

export const defaultRegion: Region = 'All';

const initialState: State = {
    entities: [],
    status: 'idle',
    limit: 0,
    filter: {
        search: '',
        region: defaultRegion,
    },
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setLimit(state, action: PayloadAction<number>) {
            state.limit = action.payload;
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
