import { useEffect, useState } from 'react';

export default function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // クライアントサイドでの実行を確認
        if (typeof window !== 'undefined') {
            // ローカルストレージからテーマ設定を取得
            const darkModePreference = localStorage.getItem('darkMode');

            // 設定がなければシステム設定を確認
            const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

            // 初期状態を設定
            const initialDarkMode = darkModePreference !== null
                ? darkModePreference === 'true'
                : prefersDarkMode;

            setIsDarkMode(initialDarkMode);

            // DOMにdarkクラスを設定
            if (initialDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newValue = !prev;

            // DOMとローカルストレージを更新
            if (newValue) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            localStorage.setItem('darkMode', String(newValue));

            return newValue;
        });
    };

    return { isDarkMode, toggleDarkMode };
}