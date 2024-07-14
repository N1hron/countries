import { RootState } from '../..';

export const selectAllCountries = (state: RootState) =>
    state.countries.entities;

export const selectCountriesStatus = (state: RootState) =>
    state.countries.status;

export const selectLimit = (state: RootState) => state.countries.limit;
