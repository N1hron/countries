type CurrencyKeys = 'code' | 'name' | 'symbol';
type Currency = Record<CurrencyKeys, string>;

type LanguageKeys = 'iso639_1' | 'iso639_2' | 'name' | 'nativeName';
type Language = Record<LanguageKeys, string>;

export type Region =
    | 'All'
    | 'Africa'
    | 'Americas'
    | 'Asia'
    | 'Europe'
    | 'Oceania';

export type CountryInfo = {
    name: string;
    nativeName?: string;
    population?: number;
    region?: string;
    capital?: string;
    flag?: string;
};

export type CountryInfoDetailed = CountryInfo & {
    subregion?: string;
    topLevelDomain?: string[];
    currencies?: Currency[];
    languages?: Language[];
    borders?: string[];
};
