import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

export default function Layout({
    children,
    title,
    description,
    image,
    path,
    noPadding = false,
}) {
    // スクロール位置をリセット
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title={title}
                description={description}
                image={image}
                path={path}
            />

            <div className="flex flex-col min-h-screen">
                <Header />

                <main className={`flex-grow ${!noPadding ? 'pt-16 pb-24' : ''}`}>
                    {children}
                </main>

                <Footer />
            </div>
        </>
    );
}