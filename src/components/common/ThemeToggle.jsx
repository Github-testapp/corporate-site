import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import useDarkMode from '../../hooks/useDarkMode';

export default function ThemeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isDarkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
        >
            {isDarkMode ? (
                <SunIcon className="w-5 h-5" />
            ) : (
                <MoonIcon className="w-5 h-5" />
            )}
        </button>
    );
}