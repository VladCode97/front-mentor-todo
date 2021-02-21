import {useEffect, useState} from 'react';
import {ETheme} from "../utils/enums";

export const useChangeTheme = () => {

    const [theme, setTheme] = useState<string>("light");

    const setMode = (mode: ETheme) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    }

    const themeToggle = () => {
        (theme === 'light') ? setMode(ETheme.dark) : setMode(ETheme.light)
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode(ETheme.light);
    }, [])

    return {
        theme,
        themeToggle
    }

}
