export default function Card({
    children,
    className = '',
    onClick = null,
    hoverable = true,
}) {
    const baseProps = {
        className: `
      bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden
      ${hoverable ? 'transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl' : ''}
      ${className}
    `,
    };

    // クリックハンドラがある場合は追加のプロパティを設定
    const interactiveProps = onClick ? {
        onClick,
        onKeyDown: (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
            }
        },
        role: 'button',
        tabIndex: 0,
        "aria-pressed": false
    } : {};

    return (
        <div
            {...baseProps}
            {...interactiveProps}
        >
            {children}
        </div>
    );
}