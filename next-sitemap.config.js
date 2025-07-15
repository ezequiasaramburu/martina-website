/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.martinavecchio.com", // Update this when you have your domain
  generateRobotsTxt: true, // Generate robots.txt file
  exclude: ['/server-sitemap.xml'], // Exclude server-sitemap if using dynamic routes
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.martinavecchio.com/server-sitemap.xml', // Update domain here too
    ],
  },
  // Static routes configuration
  changefreq: 'daily',
  priority: 0.7,
  // Transform function to customize URLs
  transform: async (config, path) => {
    // Custom priority for specific pages
    const customPriority = {
      '/': 1.0,           // Homepage - highest priority
      '/about': 0.9,      // About page - high priority
      '/coaching': 0.9,   // Coaching page - high priority
      '/contact': 0.8,    // Contact page - medium-high priority
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  // Additional paths for dynamic routes
  additionalPaths: async () => {
    // Dynamic service pages
    const dynamicPaths = [
      '/servizi/crescita-personale',
      '/servizi/formazione-aziendale',
      '/servizi/orientamento-scelta',
      '/servizi/consulenza-filosofica',
    ];

    return dynamicPaths.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
}; 