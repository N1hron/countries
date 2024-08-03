import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import { setTheme } from '../store/slices/themeSlice';
import { selectTheme } from '../store/slices/themeSlice/selectors';

function useTheme() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    useEffect(() => {
        document.body.dataset.theme = theme;
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    function toggleTheme() {
        const nextTheme = theme === 'light' ? 'dark' : 'light';

        dispatch(setTheme(nextTheme));
    }

    return [theme, toggleTheme] as const;
}

export { useTheme };
