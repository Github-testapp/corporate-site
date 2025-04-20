import { siteConfig } from './site';

export const defaultSEO = {
    title: {
        template: '%s | ' + siteConfig.name,
        default: siteConfig.name + ' - ' + siteConfig.description,
    },
    description: siteConfig.description,
    canonical: siteConfig.url,
    openGraph: {
        type: 'website',
        locale: 'ja_JP',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        handle: '@example',
        site: '@example',
        cardType: 'summary_large_image',
    },
};

export const getSEOProps = (props) => {
    const { title, description, image, path } = props;

    return {
        title: title,
        description: description || defaultSEO.description,
        openGraph: {
            ...defaultSEO.openGraph,
            title: title ? `${title} | ${siteConfig.name}` : defaultSEO.openGraph.title,
            description: description || defaultSEO.openGraph.description,
            images: image
                ? [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ]
                : defaultSEO.openGraph.images,
            url: path ? `${siteConfig.url}${path}` : siteConfig.url,
        },
        canonical: path ? `${siteConfig.url}${path}` : siteConfig.url,
    };
};