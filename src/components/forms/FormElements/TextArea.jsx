import { forwardRef } from 'react';

const TextArea = forwardRef(({
    id,
    name,
    label,
    placeholder = '',
    value = '',
    onChange = () => { },
    onBlur = () => { },
    error = null,
    required = false,
    disabled = false,
    rows = 4,
    className = '',
    helpText = '',
    ...props
}, ref) => {
    return (
        <div className="mb-4">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <textarea
                ref={ref}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                required={required}
                rows={rows}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
                className={`
          w-full rounded-lg shadow-sm px-3 py-2
          text-gray-900 dark:text-white
          bg-white dark:bg-gray-700
          border 
          ${error
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                    }
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
                {...props}
            />

            {helpText && !error && (
                <p id={`${id}-help`} className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {helpText}
                </p>
            )}

            {error && (
                <p id={`${id}-error`} className="mt-1 text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
});

TextArea.displayName = 'TextArea';

export default TextArea;