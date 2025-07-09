import {Sun, Moon} from 'lucide-react';
import   { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

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
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700")}>
            {isDarkMode ? 
            <Sun  className='h-6 w-6 text-yellow-300'/>: 
            <Moon className='h-6 w-6 text-blue-300'/>
            }</button>
    )
};