import { FetchError } from './fetchError';

async function getJson<T>(url: URL) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new FetchError(`Could not fetch ${url}`, response.status);
    }

    return (await response.json()) as T;
}

export { getJson };
