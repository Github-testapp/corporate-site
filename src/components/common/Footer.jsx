import Link from 'next/link';
import { navigationConfig } from '../../../config/navigation';
import { siteConfig } from '../../../config/site';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {navigationConfig.footer.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <Link href={item.href}>
                                            <a className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                                                {item.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <Link href="/">
                                <a className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
                                    <svg
                                        className="w-6 h-6 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                    SaaS企業名
                                </a>
                            </Link>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                {siteConfig.description}
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            {Object.entries(siteConfig.links).map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                                    aria-label={key}
                                >
                                    {key === 'twitter' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253...省略..." />
                                        </svg>
                                    )}
                                    {key === 'github' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2...省略..." />
                                        </svg>
                                    )}
                                    {key === 'linkedin' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 0h-14c-2.761 0...省略..." />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>

                </div>

                <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; {currentYear} SaaS企業名. All rights reserved.</p>
                </div>
            </div>
        </div>
        </footer >
    );
}