const baseUrl = process.env.BASE_URL || 'http://localhost:3000/';

export default async function sitemap() {
  const staticPages = [
    { path: '', priority: 1 },
  ];

  const locales = ['en', 'de', 'it', 'zh-CN'];

  const sitemap = staticPages.map(({ path, priority }) => {
    const urlPath = path ? `/${path}` : '/';
   

    return {
      url: `${baseUrl}${urlPath}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority,
    
    };
  });

  return sitemap;
}
