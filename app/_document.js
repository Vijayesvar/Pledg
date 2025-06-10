import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vijayesvar.github.io/Pledg';
  const title = 'Pledg - Peer-to-Peer Crypto-Backed INR Loans';
  const description = 'Get instant INR loans against your crypto assets with Pledg. Secure, transparent, and decentralized lending platform.';
  
  return (
    <Html lang="en" dir="ltr">
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${basePath}/og-image.jpg`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}${basePath}/og-image.jpg`} />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Base URL for relative links */}
        <base href={`${basePath}/`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
