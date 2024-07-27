import { createAsyncThunk } from '@reduxjs/toolkit';

import { CountryInfo } from '../../../types/countries';
import { Extra } from '../../../types/extra';

export const fetchAllCountries = createAsyncThunk<
    CountryInfo[],
    undefined,
    { extra: Extra }
>('countries/fetchAll', async (_, { extra: { api } }) => api.getAllCountries());
