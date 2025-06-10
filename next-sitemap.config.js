/** @type {import('next-sitemap').IConfig} */

// Get the base URL from environment variables or use a default
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://vijayesvar.github.io/Pledg').replace(/\/+$/, '');

const config = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: 'out',
  // Exclude admin and API routes
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: true,
};

export default config;
