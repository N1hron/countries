import { RootState } from '../..';

export const selectAllCountries = (state: RootState) =>
    state.countries.entities;

export const selectCountriesStatus = (state: RootState) =>
    state.countries.status;

export const selectCountriesLimit = (state: RootState) => state.countries.limit;

export const selectCountriesFilter = (state: RootState) =>
    state.countries.filter;
