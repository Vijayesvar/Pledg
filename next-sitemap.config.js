/** @type {import('next-sitemap').IConfig} */

// Get the base URL from environment variables or use a default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vijayesvar.github.io/Pledg';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'out',
  exclude: ['/server-sitemap.xml', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
    ],
  },
  // Ensure the sitemap uses the correct base URL
  siteUrl: siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: true,
};
