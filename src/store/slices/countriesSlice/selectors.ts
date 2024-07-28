import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../..';

export const selectCountries = createSelector(
    (state: RootState) => state.countries.entities.filtered,
    (state: RootState) => state.countries.limit.current,
    (filteredCountries, currentLimit) =>
        filteredCountries.slice(0, currentLimit)
);

export const selectCountriesStatus = (state: RootState) =>
    state.countries.status;

export const selectCountriesLimit = (state: RootState) => state.countries.limit;

export const selectCountriesFilter = (state: RootState) =>
    state.countries.filter;
