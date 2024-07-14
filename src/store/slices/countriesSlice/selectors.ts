import { RootState } from '../..';

export const selectAllCountries = (state: RootState) =>
    state.countries.entities;

export const selectCountriesStatus = (state: RootState) =>
    state.countries.status;
