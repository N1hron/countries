import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchAllCountries } from './thunks';
import { CountryInfo, Region } from '../../../types/countries';
import { Status } from '../../../types/status';

type State = {
    entities: {
        all: CountryInfo[];
        filtered: CountryInfo[];
    };
    limit: {
        current: number;
        previous: number;
        max: number;
    };
    filter: {
        search: string;
        region: Region;
    };
    status: Status;
};

export const defaultRegion: Region = 'All';

const initialState: State = {
    entities: {
        all: [],
        filtered: [],
    },
    limit: {
        previous: 0,
        current: 0,
        max: 0,
    },
    filter: {
        search: '',
        region: defaultRegion,
    },
    status: 'idle',
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setCurrentLimit(state, action: PayloadAction<number>) {
            let newCurrentLimit = action.payload;
            const maxLimit = state.limit.max;

            if (newCurrentLimit > maxLimit) {
                newCurrentLimit = maxLimit;
            } else if (newCurrentLimit < 1) {
                newCurrentLimit = Math.min(1, maxLimit);
            }

            state.limit.previous = state.limit.current;
            state.limit.current = newCurrentLimit;
        },
        setFilter(state, action: PayloadAction<State['filter']>) {
            const filter = action.payload;

            state.filter = filter;

            state.entities.filtered = state.entities.all.filter(
                ({ region, name }) =>
                    (filter.region === 'All' || region === filter.region) &&
                    name.match(new RegExp(filter.search, 'i'))
            );

            state.limit.max = state.entities.filtered.length;
            state.limit.current = Math.min(8, state.entities.filtered.length);
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

                state.entities.all = action.payload;
                state.entities.filtered = action.payload;

                state.limit.current = Math.min(8, action.payload.length);
                state.limit.max = action.payload.length;
            });
    },
});

export const countriesReducer = countriesSlice.reducer;
export const { setCurrentLimit, setFilter } = countriesSlice.actions;
