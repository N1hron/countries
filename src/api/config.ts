const getAllFilter = [
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
].join();

export const baseUrl = 'https://restcountries.com/v2';

export const getAllUrl = `${baseUrl}/all?fields=${getAllFilter}`;
