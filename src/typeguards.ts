import { Theme } from './types';

export function isTheme(param: unknown): param is Theme {
    return param === 'light' || param === 'dark';
}
