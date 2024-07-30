import { RootState } from '../..';

export const selectCountry = (state: RootState) => state.country.entity;
export const selectCountryStatus = (state: RootState) => state.country.status;
