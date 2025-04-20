import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/animations.css';

function MyApp({ Component, pageProps }) {
  // GoogleフォントとFontAwesomeの読み込み
  useEffect(() => {
    const addGoogleFonts = () => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    addGoogleFonts();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="革新的なSaaSソリューションで業務効率を劇的に改善。スタートアップから大企業まで、あらゆるビジネスに対応します。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;