import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('dark mode status', false);

    return [darkMode, setDarkMode]
}
