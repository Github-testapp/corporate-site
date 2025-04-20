import { useEffect, useRef } from 'react';
import { XIcon } from '@heroicons/react/outline';

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    size = 'md', // sm, md, lg, xl
}) {
    const modalRef = useRef(null);

    // ESCキーでモーダルを閉じる
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // スクロール防止
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto'; // スクロール復帰
        };
    }, [isOpen, onClose]);

    // モーダル外をクリックで閉じる
    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        full: 'max-w-full',
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={handleBackdropClick}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            tabIndex={-1}
        >

            <div
                ref={modalRef}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full ${sizeClasses[size]} transform transition-all`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                        aria-label="閉じる"
                    >
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}