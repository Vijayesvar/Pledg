// @ts-check

/** @type {boolean} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// Set the base path for GitHub Pages
const basePath = isGithubActions ? '/Pledg' : '';
const assetPrefix = isGithubActions ? '/Pledg/' : '';

// Set the site URL for sitemap and canonical URLs
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (isGithubActions ? 'https://vijayesvar.github.io/Pledg' : 'http://localhost:3000');

// Set environment variable for the build
if (typeof process !== 'undefined') {
  process.env.NEXT_PUBLIC_SITE_URL = siteUrl;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable React StrictMode for now to prevent double rendering in development
  reactStrictMode: false,
  
  // Enable static HTML export
  output: 'export',
  
  // Set base path and asset prefix for GitHub Pages
  basePath,
  assetPrefix,
  
  // Configure image optimization
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/image-loader.js',
    domains: [],
  },
  
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  
  // Generate a static export
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    // Handle CSS files
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      ?.oneOf
      ?.filter(Boolean) || [];
    
    rules.forEach((rule) => {
      if (Array.isArray(rule.use)) {
        rule.use.forEach((moduleLoader) => {
          if (typeof moduleLoader === 'object' && 
              moduleLoader.loader && 
              typeof moduleLoader.loader === 'string' && 
              moduleLoader.loader.includes('css-loader') &&
              moduleLoader.options) {
            moduleLoader.options.url = false;
          }
        });
      }
    });
    
    return config;
  },
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// For static export in production
if (process.env.NODE_ENV === 'production') {
  nextConfig.assetPrefix = assetPrefix;
}

export default nextConfig;
