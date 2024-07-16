import { Theme } from '../../types/theme';

export function isTheme(param: unknown): param is Theme {
    return param === 'light' || param === 'dark';
}
