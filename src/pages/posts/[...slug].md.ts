import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map(post => ({
    params: { slug: getPath(post.id, post.filePath, false) },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props;
  
  // In Astro 5 with glob loader, the raw body is available on the post object
  // if it's not directly on post, we might need to read the file, 
  // but usually 'body' is there if it's markdown.
  // Let's use any cast for now to check if it works or check types better.
  const content = `# ${post.data.title}\n\n${post.data.description}\n\n---\n\n${(post as any).body || ""}`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};