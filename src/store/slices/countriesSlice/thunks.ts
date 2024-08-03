import { createAsyncThunk } from '@reduxjs/toolkit';

import { CountryInfo } from '../../../types/countries';
import { Extra } from '../../../types/extra';
import { RootState } from '../..';

export const fetchAllCountries = createAsyncThunk<CountryInfo[], undefined, { extra: Extra }>(
    'countries/fetchAll',
    async (_, { extra: { api } }) => api.getAllCountries(),
    {
        condition: (_, { getState }) => {
            const { countries } = getState() as RootState;
            return !countries.entities.all.length;
        },
    }
);
