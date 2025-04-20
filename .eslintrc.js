module.exports = {
    extends: [
        'next/core-web-vitals',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: [
        'jsx-a11y',
    ],
    rules: {
        'react/display-name': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        // 以下のルールを緩和するための設定（開発時のみ）
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        '@next/next/no-html-link-for-pages': 'warn'
    },
};