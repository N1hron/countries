import { Country } from '../types/countries';
import { getAllUrl } from './config';

async function getAllCountries() {
    const response = await fetch(getAllUrl);

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
