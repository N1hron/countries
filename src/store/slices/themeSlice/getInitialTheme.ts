import { Theme } from '../../../types';
import { isTheme } from '../../../typeguards';

function getInitialTheme(): Theme {
    const savedTheme = window.localStorage.getItem('theme');
    const preferredTheme: Theme = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches
        ? 'dark'
        : 'light';

    if (isTheme(savedTheme)) return savedTheme;
    else return preferredTheme;
}

export default getInitialTheme;
