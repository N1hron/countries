import { Theme } from '../types/theme';
import { isTheme } from '../utils/typeguards/isTheme';

function getDefaultTheme(): Theme {
    const savedTheme = window.localStorage.getItem('theme');
    const preferredTheme: Theme = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches
        ? 'dark'
        : 'light';

    if (isTheme(savedTheme)) return savedTheme;
    else return preferredTheme;
}

export default getDefaultTheme;
