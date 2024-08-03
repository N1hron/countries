import SunIcon from '../../assets/icons/sun.svg?react';
import MoonIcon from '../../assets/icons/moon.svg?react';
import { useTheme } from '../../hooks/useTheme';

import './themeSwitcher.scss';

function ThemeSwitcher() {
    const [theme, toggleTheme] = useTheme();

    const Icon = theme === 'dark' ? MoonIcon : SunIcon;

    return (
        <button
            className='theme-switcher'
            onClick={toggleTheme}
            aria-label='Switch theme'
            aria-live='polite'
        >
            <Icon className='theme-switcher__icon' aria-hidden />
            <span className='theme-switcher__label'>{`${theme} Mode`}</span>
        </button>
    );
}

export { ThemeSwitcher };
