import useTheme from '../../hooks/useTheme';
import SunIcon from '../../assets/icons/sun.svg?react';
import MoonIcon from '../../assets/icons/moon.svg?react';

import './themeSwitcher.scss';

function ThemeSwitcher() {
    const [theme, toggleTheme] = useTheme();

    const Icon = theme === 'dark' ? MoonIcon : SunIcon;

    return (
        <button onClick={toggleTheme} className='theme-switcher'>
            <Icon className='theme-switcher__icon' />
            <span className='theme-switcher__label'>{theme} Mode</span>
        </button>
    );
}

export default ThemeSwitcher;
