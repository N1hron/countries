import { ApiURL } from './apiUrl';
import { getJson } from '../utils/http/getJson';
import { CountryInfo } from '../types/countries';

const fields = ['name', 'nativeName', 'population', 'region', 'capital', 'flag'];

async function getAllCountries() {
    const url = new ApiURL(`all`, fields);

    return getJson<CountryInfo[]>(url);
}

export { getAllCountries };
