import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Add base path to all router.push and router.replace calls
  useEffect(() => {
    const originalPush = router.push;
    const originalReplace = router.replace;

    router.push = (url, as, options) => {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
      const asPath = as || url;
      return originalPush.call(router, url, basePath + asPath, options);
    };

    router.replace = (url, as, options) => {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
      const asPath = as || url;
      return originalReplace.call(router, url, basePath + asPath, options);
    };

    return () => {
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
