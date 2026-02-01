import { getCollection } from "astro:content";
import { SITE } from "@/config";
import getSortedPosts from "@/utils/getSortedPosts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  let content = `# ${SITE.title} - Full Content\n\n`;
  content += `> ${SITE.desc}\n\n`;
  content += `This file contains the full content of all blog posts on ${SITE.title}.\n\n`;

  for (const post of sortedPosts) {
    content += `## ${post.data.title}\n\n`;
    content += `URL: ${SITE.website}posts/${post.id}/\n`;
    content += `Published: ${post.data.pubDatetime.toISOString()}\n`;
    content += `Description: ${post.data.description}\n\n`;
    content += `${(post as any).body || ""}\n\n`;
    content += `---\n\n`;
  }

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};