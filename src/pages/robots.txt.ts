import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL, siteURL: string) => `
User-agent: *
Allow: /
Disallow: /search
Disallow: /tags
Disallow: /archives

Sitemap: ${sitemapURL.href}
llms: ${siteURL}llms.txt
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL, site?.toString() ?? ""));
};
