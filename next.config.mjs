/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // For GitHub Pages
  basePath: isGithubActions ? '/Pledg' : '',
  assetPrefix: isGithubActions ? '/Pledg/' : '',
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
}

export default nextConfig
