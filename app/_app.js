// @ts-check

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';

/**
 * @typedef {import('next/app').AppProps} AppProps
 */

/**
 * @param {AppProps} props 
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Add base path to all router.push and router.replace calls
  useEffect(() => {
    if (!router) return;
    
    // Store the original methods
    const originalPush = router.push.bind(router);
    const originalReplace = router.replace.bind(router);

    // Override push method
    router.push = (url, as, options) => {
      const asPath = as || url;
      return originalPush(url, basePath + asPath, options);
    };

    // Override replace method
    router.replace = (url, as, options) => {
      const asPath = as || url;
      return originalReplace(url, basePath + asPath, options);
    };

    // Cleanup function to restore original methods
    return () => {
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router, basePath]);

  return (
    <>
      <Head>
        <base href={`${basePath}/`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
