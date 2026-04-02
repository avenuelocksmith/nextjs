/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.avenuelocks.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Homepage — highest priority
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() }
    }

    // Core service pages — high priority
    const highPriorityPaths = [
      '/services/',
      '/services/residential-locksmith/',
      '/services/commercial-locksmith/',
      '/services/auto-locksmith/',
      '/services/emergency-locksmith/',
      '/locksmith-near-me/',
      '/about/',
    ]
    if (highPriorityPaths.includes(path)) {
      return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() }
    }

    // City service pages — high priority (money pages)
    if (
      path.includes('-brooklyn-ny') ||
      path.includes('-brooklyn-') ||
      path.includes('-in-brooklyn')
    ) {
      return { loc: path, changefreq: 'weekly', priority: 0.85, lastmod: new Date().toISOString() }
    }

    // Neighborhood pages
    if (path.startsWith('/locksmith-near-me/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.75, lastmod: new Date().toISOString() }
    }

    // Neighborhood emergency pages
    if (path.startsWith('/emergency-locksmith-') && !path.includes('brooklyn')) {
      return { loc: path, changefreq: 'monthly', priority: 0.75, lastmod: new Date().toISOString() }
    }

    // Service sub-pages
    if (path.startsWith('/services/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() }
    }

    // Blog posts
    if (path.startsWith('/residential-locksmith-services/') || path.startsWith('/general-locksmith-services/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() }
    }

    // Blog category pages
    if (path.startsWith('/category/')) {
      return { loc: path, changefreq: 'weekly', priority: 0.5, lastmod: new Date().toISOString() }
    }

    // Static pages — lower priority
    if (['/privacy-policy/', '/terms-of-service/', '/accessibility-statement/'].includes(path)) {
      return { loc: path, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() }
    }

    // Default
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() }
  },
}
