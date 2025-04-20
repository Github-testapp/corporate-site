import { useState } from 'react';

export default function Tabs({ tabs, defaultIndex = 0 }) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
        <div>
            <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
              py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap
              ${activeIndex === index
                                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}
            `}
                        role="tab"
                        aria-selected={activeIndex === index}
                        aria-controls={`tab-panel-${index}`}
                        id={`tab-${index}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-4">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        role="tabpanel"
                        id={`tab-panel-${index}`}
                        aria-labelledby={`tab-${index}`}
                        hidden={activeIndex !== index}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}