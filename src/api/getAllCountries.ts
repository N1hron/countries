import { Country } from '../types/countries';
import { baseUrl } from './config';

async function getAllCountries() {
    const url = `${baseUrl}all`;

    const response = await fetch(url);

    if (response.ok) {
        const json = (await response.json()) as Country[];

        return json;
    } else {
        throw new Error(
            `Could not fetch all countries, status: ${response.status}, message: ${response.statusText}`
        );
    }
}

export { getAllCountries };
