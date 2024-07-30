import { ApiURL } from './apiUrl';
import getJson from '../utils/http/getJson';

function getCountryNameByCode(countryCode: string) {
    const url = new ApiURL(`alpha/${countryCode}`, ['name']);

    return getJson<{ name: string }>(url);
}

export { getCountryNameByCode };
