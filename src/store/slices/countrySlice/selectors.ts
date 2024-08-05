import { RootState } from '../..';

export const selectCountry = (state: RootState) => state.country.entity;
export const selectCountryStatus = (state: RootState) => state.country.status;
export const selectCountryStatusCode = (state: RootState) => state.country.statusCode;
