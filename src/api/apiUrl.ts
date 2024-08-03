const baseUrl = 'https://restcountries.com';

class ApiURL extends URL {
    constructor(path: string, fields?: string[]) {
        super(
            `/v2/${path}${fields ? '?fields=' + fields.join() : ''}`.replace(/\/\//g, '/'),
            baseUrl
        );
    }
}

export { ApiURL };
