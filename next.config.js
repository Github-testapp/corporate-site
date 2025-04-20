/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'], // 外部画像ドメインを許可（必要に応じて）
    },
    i18n: {
        locales: ['ja'],
        defaultLocale: 'ja',
    },
};

module.exports = nextConfig;