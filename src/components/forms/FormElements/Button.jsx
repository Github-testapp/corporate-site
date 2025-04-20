export default function Button({
    children,
    type = 'button',
    variant = 'primary', // primary, secondary, outline, ghost, danger
    size = 'md', // sm, md, lg
    fullWidth = false,
    disabled = false,
    isLoading = false,
    icon = null,
    onClick = () => { },
    className = '',
}) {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';

    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500 dark:hover:bg-blue-900',
        ghost: 'text-blue-500 hover:bg-blue-50 focus:ring-blue-500 dark:hover:bg-blue-900',
        danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
    };

    const sizeClasses = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-2.5',
    };

    const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none';

    return (
        <button
            type={type}
            className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || isLoading ? disabledClasses : ''}
        ${className}
      `}
            disabled={disabled || isLoading}
            onClick={onClick}
        >
            {isLoading && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}

            {icon && !isLoading && (
                <span className="mr-2">{icon}</span>
            )}

            {children}
        </button>
    );
}