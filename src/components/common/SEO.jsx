import Head from 'next/head';
import { getSEOProps } from '../../../config/seo';

export default function SEO({ title, description, image, path }) {
    const seoProps = getSEOProps({ title, description, image, path });

    return (
        <Head>
            <title>{seoProps.title}</title>
            <meta name="description" content={seoProps.description} />
            <link rel="canonical" href={seoProps.canonical} />

            {/* Open Graph */}
            <meta property="og:title" content={seoProps.openGraph.title} />
            <meta property="og:description" content={seoProps.openGraph.description} />
            <meta property="og:url" content={seoProps.openGraph.url} />
            <meta property="og:type" content={seoProps.openGraph.type} />
            <meta property="og:locale" content={seoProps.openGraph.locale} />
            {seoProps.openGraph.images.map((image, index) => (
                <meta key={`og-image-${index}`} property="og:image" content={image.url} />
            ))}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoProps.openGraph.title} />
            <meta name="twitter:description" content={seoProps.openGraph.description} />
            {seoProps.openGraph.images.length > 0 && (
                <meta name="twitter:image" content={seoProps.openGraph.images[0].url} />
            )}
        </Head>
    );
}