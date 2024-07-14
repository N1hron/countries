import { createAsyncThunk } from '@reduxjs/toolkit';
import {} from '@reduxjs/toolkit';

import { Country } from '../../../types/countries';
import { Extra } from '../../../types/extra';

export const fetchAllCountries = createAsyncThunk<
    Country[],
    undefined,
    { extra: Extra }
>('countries/fetchAll', async (_, { extra: { api } }) => api.getAllCountries());
