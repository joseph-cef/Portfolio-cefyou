import {Sun, Moon} from 'lucide-react';
import   { useEffect, useState } from 'react';

export const ThemeToggle = () => {
const [isDarkMode, setisDarkMode] = useState(false);

useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        setisDarkMode(true);
    } else {
        document.documentElement.classList.remove('dark');
        setisDarkMode(false);
    }
}, []);
const toggleTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setisDarkMode(false);
     }else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setisDarkMode(true);
     }
}
    return(
        <button onClick={toggleTheme}>{isDarkMode ? <Sun  className='h-6 w-6 text-yellow-300'/>: <Moon className='h-6 w-6 text-blue-300'/>}</button>
    )
};