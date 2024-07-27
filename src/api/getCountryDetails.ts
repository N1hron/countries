import { ApiURL } from './apiUrl';
import getJson from '../utils/http/getJson';
import { CountryInfoDetailed } from '../types/countries';

const fields = [
    'name',
    'nativeName',
    'population',
    'region',
    'subregion',
    'capital',
    'topLevelDomain',
    'currencies',
    'languages',
    'borders',
    'flag',
];

async function getCountryDetails(countryName: string) {
    const url = new ApiURL(`name/${countryName}`, fields);

    return getJson<CountryInfoDetailed[]>(url);
}

export { getCountryDetails };
