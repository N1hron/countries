import { createAsyncThunk } from '@reduxjs/toolkit';

import { CountryInfoDetailed } from '../../../types/countries';
import { Extra } from '../../../types/extra';
import { RootState } from '../..';

export const fetchCountryByName = createAsyncThunk<
    CountryInfoDetailed[],
    string,
    { extra: Extra }
>(
    'countries/fetchCountryByName',
    async (countryName, { extra: { api } }) =>
        api.getCountryDetailsByName(countryName),
    {
        condition: (countryName, { getState }) => {
            const { country } = getState() as RootState;
            return countryName !== country.entity?.name;
        },
    }
);
