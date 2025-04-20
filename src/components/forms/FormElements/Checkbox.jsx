import { forwardRef } from 'react';

const Checkbox = forwardRef(({
    id,
    name,
    label,
    checked = false,
    onChange = () => { },
    onBlur = () => { },
    error = null,
    disabled = false,
    className = '',
    helpText = '',
    ...props
}, ref) => {
    return (
        <div className="mb-4">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input
                        ref={ref}
                        id={id}
                        name={name}
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
                        className={`
              w-4 h-4 rounded 
              text-blue-500 
              border-gray-300 dark:border-gray-600 
              focus:ring-blue-500
              disabled:opacity-50 disabled:cursor-not-allowed
              ${className}
            `}
                        {...props}
                    />
                </div>

                <div className="ml-3 text-sm">
                    {label && (
                        <label htmlFor={id} className="font-medium text-gray-700 dark:text-gray-300">
                            {label}
                        </label>
                    )}
                </div>
            </div>

            {helpText && !error && (
                <p id={`${id}-help`} className="mt-1 text-sm text-gray-500 dark:text-gray-400 ml-7">
                    {helpText}
                </p>
            )}

            {error && (
                <p id={`${id}-error`} className="mt-1 text-sm text-red-500 ml-7" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;