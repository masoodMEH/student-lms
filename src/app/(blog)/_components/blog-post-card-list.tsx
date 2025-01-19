import React from "react";

import { API_URL } from "@/configs/global";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { BlogPostCard } from "./blog-post-card";

export type BlogPostCardListProps = { posts: BlogPostSummary[] };

async function getNewestPosts(count: number): Promise<BlogPostSummary[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${API_URL}/blog/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60, //86400 seconds - 1 day,
      },
    }
  );
  return res.json();
}

export const BlogPostCardList: React.FC<BlogPostCardListProps> = async () => {
  const newestBlogPostsData = await getNewestPosts(4);

  await Promise.all([
    newestBlogPostsData,
  ]);

  return (
    <div className="flex flex-wrap justify-center items-center xl:justify-start gap-6 mt-10">
      {newestBlogPostsData.map((post) => (
        <BlogPostCard key={`blog-post-${post.slug}`} {...post} />
      ))}
    </div>
  );
};

export default BlogPostCardList;
