import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import ThemeToggle from './ThemeToggle';
import { navigationConfig } from '../../../config/navigation';
import useScrollPosition from '../../hooks/useScrollPosition';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const { isScrolled } = useScrollPosition();

    // ページ遷移時にメニューを閉じる
    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? 'bg-white dark:bg-gray-900 shadow-md py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* ロゴ */}
                <Link href="/">
                    <a className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
                        <span className="sr-only">SaaS企業名</span>
                        <svg
                            className="w-8 h-8 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        SaaS企業名
                    </a>
                </Link>

                {/* デスクトップナビゲーション */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navigationConfig.main.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <a
                                className={`
                  ${item.isButton
                                        ? 'btn-primary'
                                        : 'text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium'
                                    }
                  ${router.pathname === item.href
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : ''
                                    }
                `}
                            >
                                {item.title}
                            </a>
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* モバイルメニューボタン */}
                <div className="flex items-center md:hidden">
                    <ThemeToggle />
                    <button
                        className="ml-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <XIcon className="w-6 h-6" />
                        ) : (
                            <MenuIcon className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* モバイルメニュー */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 border-t dark:border-gray-700 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            {navigationConfig.main.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <a
                                        className={`
                      py-2 px-4 rounded-lg
                      ${item.isButton
                                                ? 'btn-primary text-center'
                                                : 'text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium'
                                            }
                      ${router.pathname === item.href
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : ''
                                            }
                    `}
                                    >
                                        {item.title}
                                    </a>
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}