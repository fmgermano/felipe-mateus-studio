import { blogPostsData } from "../data/postsData";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  readingTime?: string;
}

export const getBlogPosts = (): BlogPost[] => blogPostsData;

export const getBlogPost = (slug: string): BlogPost | null =>
  blogPostsData.find((post) => post.slug === slug) || null;

export const getTagColor = (tag: string): string => {
  switch (tag) {
    case "dev":
      return "bg-blue-100 text-blue-700";
    case "art":
      return "bg-rose-100 text-rose-700";
    case "pessoal":
      return "bg-amber-100 text-amber-700";
    case "reflexao":
      return "bg-stone-200 text-stone-800";
    default:
      return "bg-stone-100 text-stone-700";
  }
};
