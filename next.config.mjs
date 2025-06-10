/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// Set the base path for GitHub Pages
const basePath = isGithubActions ? '/Pledg' : '';
const assetPrefix = isGithubActions ? '/Pledg/' : '';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    loader: 'custom',
    path: assetPrefix,
  },
  // For GitHub Pages
  basePath,
  assetPrefix,
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  // Ensure static export works with next/link
  experimental: {
    appDir: true,
    // Enable CSS modules
    css: true,
  },
  // Fix for CSS loading
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Fix for CSS loading
    const cssLoader = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.css')
    );
    
    if (cssLoader) {
      cssLoader.include = [];
      cssLoader.exclude = /node_modules/;
    }
    
    return config;
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

// For static export
if (process.env.NODE_ENV === 'production') {
  nextConfig.assetPrefix = assetPrefix;
}

export default nextConfig
