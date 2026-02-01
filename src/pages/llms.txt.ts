import { getCollection } from "astro:content";
import { SITE } from "@/config";
import getSortedPosts from "@/utils/getSortedPosts";
import { getPath } from "@/utils/getPath";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  const baseUrl = SITE.website.endsWith("/")
    ? SITE.website.slice(0, -1)
    : SITE.website;

  let content = `# ${SITE.title}\n\n`;
  content += `> ${SITE.desc}\n\n`;

  content += `This file provides a machine-readable index of the content on ${SITE.title}, optimized for LLMs. It includes links to the full text of blog posts in Markdown format.\n\n`;

  content += `## Full Content\n\n`;
  content += `- [Full Version](${baseUrl}/llms-full.txt): A single file containing the full text of all blog posts.\n\n`;

  content += `## Main Content\n\n`;
  content += `- [Home](${baseUrl}/): The homepage of ${SITE.title}.\n`;
  content += `- [About](${baseUrl}/about/): Information about the author and the blog.\n`;

  content += `## Blog Posts\n\n`;

  for (const post of sortedPosts) {
    const slug = getPath(post.id, post.filePath, false);
    const postUrl = `${baseUrl}/posts${slug}.md`;
    content += `- [${post.data.title}](${postUrl}): ${post.data.description}\n`;
  }

  content += `\n## Optional\n\n`;
  content += `- [Tags](${baseUrl}/tags/): Browse posts by tag.\n`;
  content += `- [Search](${baseUrl}/search/): Search for specific topics.\n`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
