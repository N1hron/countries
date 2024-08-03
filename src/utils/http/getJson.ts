async function getJson<T>(url: URL) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return (await response.json()) as T;
}

export { getJson };
